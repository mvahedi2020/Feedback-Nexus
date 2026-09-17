import {describe,it,expect} from 'vitest';
import {seed,score,merge,groupAccounts,csv} from './model';
describe('evidence and prioritization',()=>{
it('uses reach, impact, confidence and effort',()=>expect(score(seed[0])).toBe(3.2));
it('preserves original evidence and deduplicates affected accounts',()=>{const result=merge(seed,['F01','F02']);expect(result).toHaveLength(6);expect(result[1].quote).toBe(seed[1].quote);expect(groupAccounts(result,result[0])).toHaveLength(4);});
it('keeps an existing linked group intact when adding a related signal',()=>{const linked=merge(seed,['F01','F02']);const expanded=merge(linked,['F02','F03']);expect(expanded.filter(item=>item.group==='F02').map(item=>item.id)).toEqual(['F01','F02','F03']);});
it('does not create a one-record group from invalid selections',()=>{expect(merge(seed,['F01'])).toBe(seed);expect(merge(seed,['missing','F01'])).toBe(seed);});
it('keeps the import-recovery source accounts and each record score distinct',()=>{const grouped=merge(seed,['F01','F02']);const f01=grouped.find(item=>item.id==='F01')!;expect(f01.accounts).toEqual(['Alder Labs','Finch Studio','Cedar Systems']);expect(groupAccounts(grouped,f01)).toEqual(['Alder Labs','Finch Studio','Cedar Systems','Pineworks']);expect(score({...f01,confidence:.4})).toBe(1.6);});
it('exports only planned feedback and escapes quotes',()=>{const result=csv([{...seed[0],title:'A "quote"',status:'Planned'},seed[1]]);expect(result).toContain('A ""quote""');expect(result).not.toContain('F02');});
it('never mutates source fixtures',()=>{merge(seed,['F01','F02']);expect(seed[0].group).toBeNull();});
});
