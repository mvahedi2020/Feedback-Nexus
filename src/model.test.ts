import {describe,it,expect} from 'vitest';
import {seed,score,merge,groupAccounts,csv,newFeedbackId,normalizeEffort,uniqueAccounts} from './model';
describe('evidence and prioritization',()=>{
it('normalizes account names before counting reach',()=>expect(uniqueAccounts([' Alder Labs','alder labs','Finch Studio '])).toEqual(['Alder Labs','Finch Studio']));
it('scores unique accounts once when persisted data repeats a customer',()=>expect(score({...seed[0],accounts:['Alder Labs',' alder labs ']})).toBe(1.1));
it('uses reach, impact, confidence and effort',()=>expect(score(seed[0])).toBe(3.2));
it('keeps invalid effort input within the supported range',()=>{expect(normalizeEffort(Number.NaN)).toBe(.5);expect(normalizeEffort(0)).toBe(.5);expect(normalizeEffort(120)).toBe(100);});
it('creates a distinct manual feedback id when timestamps collide',()=>{const first={...seed[0],id:'F123'};expect(newFeedbackId([first],123)).toBe('F123-2');expect(newFeedbackId([first,{...seed[1],id:'F123-2'}],123)).toBe('F123-3');});
it('preserves original evidence and deduplicates affected accounts',()=>{const result=merge(seed,['F01','F02']);expect(result).toHaveLength(6);expect(result[1].quote).toBe(seed[1].quote);expect(groupAccounts(result,result[0])).toHaveLength(4);});
it('keeps an existing linked group intact when adding a related signal',()=>{const linked=merge(seed,['F01','F02']);const expanded=merge(linked,['F02','F03']);expect(expanded.filter(item=>item.group==='F02').map(item=>item.id)).toEqual(['F01','F02','F03']);});
it('does not create a one-record group from invalid selections',()=>{expect(merge(seed,['F01'])).toBe(seed);expect(merge(seed,['missing','F01'])).toBe(seed);});
it('keeps the import-recovery source accounts and each record score distinct',()=>{const grouped=merge(seed,['F01','F02']);const f01=grouped.find(item=>item.id==='F01')!;expect(f01.accounts).toEqual(['Alder Labs','Finch Studio','Cedar Systems']);expect(groupAccounts(grouped,f01)).toEqual(['Alder Labs','Finch Studio','Cedar Systems','Pineworks']);expect(score({...f01,confidence:.4})).toBe(1.6);});
it('exports only planned feedback and escapes quotes',()=>{const result=csv([{...seed[0],title:'A "quote"',status:'Planned'},seed[1]]);expect(result).toContain('A ""quote""');expect(result).not.toContain('F02');});
it('exports planned feedback in the visible score order with explicit units',()=>{const result=csv([{...seed[0],status:'Planned',confidence:.4},{...seed[3],status:'Planned'}]);expect(result).toContain('"Original record accounts","Directional score"');expect(result.indexOf('F04')).toBeLessThan(result.indexOf('F01'));});
it('never mutates source fixtures',()=>{merge(seed,['F01','F02']);expect(seed[0].group).toBeNull();});
});
