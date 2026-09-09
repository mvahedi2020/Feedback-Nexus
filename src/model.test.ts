import {describe,it,expect} from 'vitest';
import {seed,score,merge,groupAccounts,csv} from './model';
describe('evidence and prioritization',()=>{
it('uses reach, impact, confidence and effort',()=>expect(score(seed[0])).toBe(3.2));
it('preserves original evidence and deduplicates affected accounts',()=>{const result=merge(seed,['F01','F02']);expect(result).toHaveLength(6);expect(result[1].quote).toBe(seed[1].quote);expect(groupAccounts(result,result[0])).toHaveLength(4);});
it('exports only planned feedback and escapes quotes',()=>{const result=csv([{...seed[0],title:'A "quote"',status:'Planned'},seed[1]]);expect(result).toContain('A ""quote""');expect(result).not.toContain('F02');});
it('never mutates source fixtures',()=>{merge(seed,['F01','F02']);expect(seed[0].group).toBeNull();});
});
