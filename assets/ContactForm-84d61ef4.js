import{d as m,r as h,a as f,c as v,o as c,b as i,e as s,w as _,v as r,p as b,f as g,_ as y}from"./main-0fb4b30c.js";import"./index-c1d1206f.js";import"./index-148933b2.js";const x=async e=>{let n=`
    <h1>Номер: </h1>${e.phone}
    <br>
    <h1>Имя: </h1>${e.name||"-"}
    <br>
    <h1>Сообщение: </h1>${e.message||"-"}
    `;await Email.send({SecureToken:"339c8ec4-f6d1-4536-a646-a7f7cef2abeb",To:"cornelius.media5@gmail.com",From:"cornelius.media5@gmail.com",Subject:`Заяка на звонок с corenelius.md ${e.phone}`,Body:n})},p=e=>(b("data-v-00f5bd6e"),e=e(),g(),e),k={class:"contact_form f fd-col ai-fs rg-4"},w={class:"f fd-col rg-3 w-100"},C={class:"f fd-col rg-2"},F=["disabled"],S=["disabled"],B=["disabled"],I={key:0},V={key:1,class:"button-loader"},$=p(()=>s("div",{class:"left"},null,-1)),E=p(()=>s("div",{class:"center"},null,-1)),T=p(()=>s("div",{class:"right"},null,-1)),U=[$,E,T],M=m({__name:"ContactForm",emits:["success"],setup(e,{emit:n}){const o=h({phone:"",name:"",message:""}),d=f(!1),u=async()=>{d.value=!0,await x(o),d.value=!1,n("success")},l=v(()=>{if(!o.phone)return"Номер телефона является обязательным полем формы"});return(j,t)=>(c(),i("div",k,[s("div",w,[s("div",C,[_(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.phone=a),type:"text",placeholder:"Введите ваше телефон"},null,512),[[r,o.phone]])]),_(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.name=a),type:"text",placeholder:"Введите ваше имя",disabled:!!l.value},null,8,F),[[r,o.name]]),_(s("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.message=a),type:"text",placeholder:"Введите ваше сообщение",disabled:!!l.value},null,8,S),[[r,o.message]])]),s("button",{onClick:u,class:"px-5",disabled:!!l.value},[d.value?(c(),i("div",V,U)):(c(),i("span",I," Отправить "))],8,B)]))}});const q=y(M,[["__scopeId","data-v-00f5bd6e"]]);export{q as default};
