import{r as e}from"./index-421448b9.js";import{A as I,B as $,C as A,D as U,L as b}from"./Views-55051943.js";function z(){const n=e.useRef(!1);return I(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function B(){const n=z(),[s,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(s+1)},[s]);return[e.useCallback(()=>$.postRender(r),[r]),s]}class K extends e.Component{getSnapshotBeforeUpdate(s){const t=this.props.childRef.current;if(t&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function O({children:n,isPresent:s}){const t=e.useId(),r=e.useRef(null),p=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:l,height:d,top:f,left:h}=p.current;if(s||!r.current||!l||!d)return;r.current.dataset.motionPopId=t;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[s]),e.createElement(K,{isPresent:s,childRef:r,sizeRef:p},e.cloneElement(n,{ref:r}))}const M=({children:n,initial:s,isPresent:t,onExitComplete:r,custom:p,presenceAffectsLayout:l,mode:d})=>{const f=A(D),h=e.useId(),a=e.useMemo(()=>({id:h,initial:s,isPresent:t,custom:p,onExitComplete:o=>{f.set(o,!0);for(const u of f.values())if(!u)return;r&&r()},register:o=>(f.set(o,!1),()=>f.delete(o))}),l?void 0:[t]);return e.useMemo(()=>{f.forEach((o,u)=>f.set(u,!1))},[t]),e.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),d==="popLayout"&&(n=e.createElement(O,{isPresent:t},n)),e.createElement(U.Provider,{value:a},n)};function D(){return new Map}function S(n){return e.useEffect(()=>()=>n(),[])}const m=n=>n.key||"";function T(n,s){n.forEach(t=>{const r=m(t);s.set(r,t)})}function G(n){const s=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&s.push(t)}),s}const W=({children:n,custom:s,initial:t=!0,onExitComplete:r,exitBeforeEnter:p,presenceAffectsLayout:l=!0,mode:d="sync"})=>{const f=e.useContext(b).forceRender||B()[0],h=z(),a=G(n);let o=a;const u=e.useRef(new Map).current,C=e.useRef(o),E=e.useRef(new Map).current,x=e.useRef(!0);if(I(()=>{x.current=!1,T(a,E),C.current=o}),S(()=>{x.current=!0,E.clear(),u.clear()}),x.current)return e.createElement(e.Fragment,null,o.map(c=>e.createElement(M,{key:m(c),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:l,mode:d},c)));o=[...o];const g=C.current.map(m),w=a.map(m),P=g.length;for(let c=0;c<P;c++){const i=g[c];w.indexOf(i)===-1&&!u.has(i)&&u.set(i,void 0)}return d==="wait"&&u.size&&(o=[]),u.forEach((c,i)=>{if(w.indexOf(i)!==-1)return;const y=E.get(i);if(!y)return;const L=g.indexOf(i);let R=c;if(!R){const k=()=>{E.delete(i),u.delete(i);const F=C.current.findIndex(v=>v.key===i);if(C.current.splice(F,1),!u.size){if(C.current=a,h.current===!1)return;f(),r&&r()}};R=e.createElement(M,{key:m(y),isPresent:!1,onExitComplete:k,custom:s,presenceAffectsLayout:l,mode:d},y),u.set(i,R)}o.splice(L,0,R)}),o=o.map(c=>{const i=c.key;return u.has(i)?c:e.createElement(M,{key:m(c),isPresent:!0,presenceAffectsLayout:l,mode:d},c)}),e.createElement(e.Fragment,null,u.size?o:o.map(c=>e.cloneElement(c)))};export{W as A};
