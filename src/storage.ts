import {useState} from 'react';
import {seed,type Feedback,isFeedback} from './model';
const key='mo-feedback-nexus-v1';
export function useFeedback(){
const [initial]=useState(()=>{try{const saved=localStorage.getItem(key);if(!saved)return {items:seed,warning:''};const parsed=JSON.parse(saved);if(!Array.isArray(parsed)||!parsed.length||!parsed.every(isFeedback))throw Error();return {items:parsed as Feedback[],warning:''};}catch{return {items:seed,warning:'Saved data is unavailable or incompatible. The sample workspace is shown; your next edit will save it if browser storage is available.'};}});
const [items,setItems]=useState<Feedback[]>(initial.items);const [warning,setWarning]=useState(initial.warning);
function save(next:Feedback[]){setItems(next);try{localStorage.setItem(key,JSON.stringify(next));}catch{setWarning('Browser storage is unavailable. Changes work for this session only.');}}
return {items,save,warning};
}
