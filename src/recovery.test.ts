import {it,expect} from 'vitest';
import {csv,isFeedback,seed} from './model';
it('neutralizes spreadsheet formula text in exported user fields',()=>{for(const title of ['=2+2','+CMD','-1+2','@SUM(1)','\t=2+2'])expect(csv([{...seed[0],title,status:'Planned'}])).toContain("'"+title);});
it('rejects incomplete persisted feedback records',()=>{expect(isFeedback({id:'F1',title:'x',accounts:[],status:'Inbox',effort:1,quote:'q'})).toBe(false);expect(isFeedback(seed[0])).toBe(true);});
