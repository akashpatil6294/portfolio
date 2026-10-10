import {ImageResponse} from 'next/og';
import {portfolio as p} from '@/data/portfolio';
export const alt = `${p.name} — portfolio`;
export const size = {width:1200,height:630};
export const contentType = 'image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',background:'#111112',color:'#ededeb',width:'100%',height:'100%',padding:90}}><div style={{fontSize:24,color:'#ff4848',marginBottom:30}}>{p.role}</div><div style={{fontSize:88,fontWeight:800,letterSpacing:-5}}>{p.name}</div><div style={{fontSize:32,color:'#939395',marginTop:25,maxWidth:900}}>{p.headline}</div></div>,size)}
