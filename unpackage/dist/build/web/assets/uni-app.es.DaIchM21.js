import{z as o,w as s,A as e,B as a,C as r,O as i}from"./index-CplmrVOw.js";const n=o({}),t={emit(o,s){o?n[o]=s:console.error("事件名称不能为空")},on(o,e){o&&"function"==typeof e?s((()=>n[o]),(o=>{void 0!==o&&e(o)}),{immediate:!0}):console.error("事件名称不能为空且回调必须为函数")}},m=(o=>(s,i=r())=>{!e&&a(o,s,i)})(i);export{t as e,m as o};