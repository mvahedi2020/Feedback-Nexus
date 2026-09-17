import {it,expect} from 'vitest';
import {csv,isFeedback,isFeedbackList,seed} from './model';
it('neutralizes spreadsheet formula text in exported user fields',()=>{for(const title of ['=2+2','+CMD','-1+2','@SUM(1)','\t=2+2'])expect(csv([{...seed[0],title,status:'Planned'}])).toContain("'"+title);});
it('rejects incomplete persisted feedback records',()=>{expect(isFeedback({id:'F1',title:'x',accounts:[],status:'Inbox',effort:1,quote:'q'})).toBe(false);expect(isFeedback(seed[0])).toBe(true);});
it('rejects saved feedback without usable evidence context',()=>{for(const patch of [{title:' '},{quote:''},{accounts:[]},{accounts:['  ']}])expect(isFeedback({...seed[0],...patch})).toBe(false);});
it('rejects duplicate ids and incomplete saved groups',()=>{expect(isFeedbackList(seed)).toBe(true);expect(isFeedbackList([seed[0],{...seed[1],id:'F01'}])).toBe(false);expect(isFeedbackList([{...seed[0],group:'F01'},...seed.slice(1)])).toBe(false);});
