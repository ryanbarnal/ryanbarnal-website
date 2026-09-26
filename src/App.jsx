import {useState,useEffect} from "react";
export default function App(){
const [dark,setDark]=useState(false);
const [filter,setFilter]=useState('All');
const [selected,setSelected]=useState(null);
useEffect(()=>{document.body.className=dark?'dark':''},[dark]);
const photos=[
{id:1,cat:'Photography',caption:'Landscape'},
{id:2,cat:'Travel',caption:'Mountain Trip'},
{id:3,cat:'Cycling',caption:'Cycling Adventure'},
{id:4,cat:'Hiking',caption:'Hiking Trail'},
{id:5,cat:'Farming',caption:'Farm Project'},
{id:6,cat:'Security',caption:'Consultancy Project'}];
const filtered=filter==='All'?photos:photos.filter(p=>p.cat===filter);
return <div>
<button className="toggle" onClick={()=>setDark(!dark)}>{dark?'Light':'Dark'} Mode</button>
<section className="hero"><h1>AK Ought</h1><p>Photography • Hiking • Cycling • Travel • Farming • Security Consultancy</p></section>
<section className="filters">{['All','Photography','Travel','Cycling','Hiking','Farming','Security'].map(f=><button key={f} onClick={()=>setFilter(f)}>{f}</button>)}</section>
<div className="gallery">{filtered.map(p=><figure key={p.id} onClick={()=>setSelected(p)}><img src={`https://picsum.photos/1000/700?random=${p.id}`} /><figcaption>{p.caption}</figcaption></figure>)}</div>
{selected && <div className="lightbox" onClick={()=>setSelected(null)}><img src={`https://picsum.photos/1400/900?random=${selected.id}`}/><p>{selected.caption}</p></div>}
<section className="contact"><h2>Contact</h2><form method="post" action="/api/contact"><input name="name" placeholder="Name"/><input name="email" placeholder="Email"/><textarea name="message" placeholder="Message"></textarea><button>Send</button></form></section>
</div>}
