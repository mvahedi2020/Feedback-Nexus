import {useState} from 'react';
import {seed,type Feedback,isFeedbackList} from './model';
const key='mo-feedback-nexus-v1';
export function readSavedFeedback(raw:string|null){if(!raw)return {items:seed,warning:'',blocked:false};try{const parsed=JSON.parse(raw);if(!isFeedbackList(parsed))throw Error();return {items:parsed as Feedback[],warning:'',blocked:false};}catch{return {items:seed,warning:'Saved data is unavailable or incompatible. Review or reset it before saving new feedback.',blocked:true};}}
export function useFeedback(){
const [initial]=useState(()=>readSavedFeedback(localStorage.getItem(key)));
const [items,setItems]=useState<Feedback[]>(initial.items);const [warning,setWarning]=useState(initial.warning);const [blocked,setBlocked]=useState(initial.blocked);
function save(next:Feedback[]){setItems(next);if(blocked){if(next===seed){try{localStorage.removeItem(key);}catch{void 0;}setBlocked(false);setWarning('');}return;}try{localStorage.setItem(key,JSON.stringify(next));}catch{setWarning('Browser storage is unavailable. Changes work for this session only.');}}
function reset(){try{localStorage.removeItem(key);}catch{void 0;}setItems(seed);setBlocked(false);setWarning('');}
return {items,save,reset,warning};
}
