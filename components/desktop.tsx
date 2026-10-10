'use client';

import {useEffect, useState} from 'react';

import Image from 'next/image';

import Link from 'next/link';

import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';

import {UserRound, Info, Code2, Cpu, GraduationCap, Mail, GitBranch as Github, FileText, Sun, Moon, ArrowUpRight, ArrowRight, ContactRound as Linkedin, CornerDownLeft, TerminalSquare, Maximize2, Minimize2} from 'lucide-react';

import {About, ContactForm, MouseGlow, SocialLinks, Terminal} from './extras';
import {portfolio as p} from '@/data/portfolio';

type Panel = typeof p.navigation[number] | 'Experience';

const navigation: Panel[] = [...p.navigation, ...(p.experience.length ? ['Experience' as const] : [])];

const icons = [UserRound, Info, Code2, Cpu, GraduationCap, TerminalSquare, Mail];

export function Desktop(){

 const [expanded,setExpanded]=useState(false); const [panel,setPanel]=useState<Panel>('Profile'); const [opened,setOpened]=useState(true); const [clock,setClock]=useState(''); const reduce=useReducedMotion();

 useEffect(()=>{const update=()=>setClock(new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}).format(new Date()));update();const timer=setInterval(update,60000);return()=>clearInterval(timer)},[]);

 function select(name:Panel){setPanel(name);setOpened(true);window.scrollTo({top:0,behavior:'instant'})}

 function theme(){const next=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=next?'light':'dark';localStorage.setItem('portfolio-theme',next?'light':'dark')}

 return <div className={`desktop ${expanded ? "expanded-desktop" : ""}`}><MouseGlow/><a className="skip" href="#content">{p.labels.skip}</a><header className="topbar"><Link href="/" className="brand"><b>{p.initials}<span>.</span></b><span>{p.labels.brand}</span></Link><span className="availability"><i/>{p.availability}</span><div className="top-right"><button onClick={theme} aria-label={p.labels.theme}><span className="dark-only theme-choice"><Sun size={13}/>{p.labels.light}</span><span className="light-only theme-choice"><Moon size={13}/>{p.labels.dark}</span></button><time suppressHydrationWarning>{clock || '—'}</time><span>{p.labels.timezone}</span></div></header>

 <div className="workspace"><aside className="left-widgets"><section className="widget quote"><span className="eyebrow">{p.labels.workflow}</span><p>{p.headline}</p><span className="signature">{p.name}<span>↗</span></span></section><section className="widget project-list"><span className="eyebrow">{p.labels.selected}</span>{p.projects.map(x=><Link key={x.slug} href={`/projects/${x.slug}`}><span className="tiny">{x.symbol}</span><div>{x.title}<small>{x.category}</small></div><ArrowUpRight size={13}/></Link>)}<button className="text-link" onClick={()=>select('Projects')}>{p.labels.explore}<ArrowRight size={14}/></button></section><section className="widget resume-widget"><FileText size={24}/><div><b>{p.labels.cv}</b><small>{p.labels.pdf}</small></div><a href={p.resume} target="_blank" aria-label={p.labels.download}><ArrowUpRight size={19}/></a></section></aside>

 <main id="content" tabIndex={-1} className="main-area"><AnimatePresence mode="wait">{opened?<motion.section key={panel} initial={{opacity:0,y:reduce?0:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduce?0:8}} transition={{duration:reduce?0:.22}} className={`window ${panel==='Profile'?'profile-window':''}`} aria-label={panel}><div className="window-bar"><div className="window-controls"><button className="close" onClick={()=>setOpened(false)} aria-label={p.labels.close}/><button className="minimize" onClick={()=>setOpened(false)} aria-label={p.labels.minimize}/><button className="maximize" onClick={()=>setExpanded(v=>!v)} aria-label={expanded?p.labels.unmaximize:p.labels.maximize}>{expanded?<Minimize2 size={8}/>:<Maximize2 size={8}/>}</button></div><span>{p.initials} / {panel.toUpperCase()}</span><span className="window-id">⌘</span></div><div className="window-content">

 {panel==='Profile'?<><div className="eyebrow intro-label"><i/> {p.role}</div><h1>{p.name}<span>.</span></h1><p className="headline">{p.headline}</p><div className="rule"/><p className="bio">{p.bio}</p><div className="actions"><button className="primary" onClick={()=>select('Projects')}>{p.labels.explore}<ArrowUpRight size={16}/></button><button className="secondary" onClick={()=>select('Contact')}>{p.labels.contact}<Mail size={15}/></button></div><div className="profile-footer"><Image src={p.avatar} alt={p.name} width={52} height={52} priority/><div><b>{p.name}</b><small>{p.location}</small></div><div className="socials"><a href={p.github} aria-label={p.labels.github}><Github size={18}/></a><a href={p.linkedin} aria-label={p.labels.linkedin}><Linkedin size={18}/></a><a href={p.x} aria-label={p.labels.x}>𝕏</a><a href={`mailto:${p.email}`} aria-label={p.labels.email}><Mail size={18}/></a></div></div></>:null}

 {panel==='About'?<About/>:null}
 {panel==='Terminal'?<Terminal/>:null}
 {panel==='Projects'?<><span className="eyebrow">{p.labels.selected}</span><h2>{p.labels.projectHeading}</h2><div className="projects-grid">{p.projects.map(x=><article className="project-card rich-project" key={x.slug}>{x.screenshot?<div className="project-art"><Image src={x.screenshot} alt={`${x.title} preview`} fill sizes="(max-width:650px) 100vw, 50vw" style={{objectFit:x.url?'cover':'contain'}}/><span>{x.symbol}</span></div>:<div className={`project-art ${x.visual}`} aria-hidden="true"><span>{x.symbol}</span><Code2 size={44}/></div>}<span className="eyebrow">{x.symbol} / {x.category}</span><h3>{x.title}</h3><p>{x.description}</p><div className="tags">{x.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions">{x.url&&<a className="primary" href={x.url}>{p.labels.visit}<ArrowUpRight size={14}/></a>}<Link className="secondary" href={`/projects/${x.slug}`}>{p.labels.caseStudy}</Link></div></article>)}</div><a className="text-link" href={p.github}>{p.labels.repoNote}<Github size={14}/></a></>:null}

 {panel==='Skills'?<><span className="eyebrow">{p.role}</span><h2>{p.labels.skillsHeading}</h2>{p.skills.map(s=><section className="skill-group" key={s.group}><h3>{s.group}</h3><div className="tags">{s.items.map(i=><span key={i}>{i}</span>)}</div></section>)}</>:null}

 {panel==='Education'?<><span className="eyebrow">{p.education.dates}</span><h2>{p.labels.educationHeading}</h2><section className="education"><GraduationCap size={30}/><h3>{p.education.school}</h3><p>{p.education.degree}</p><span className="badge">{p.education.grade}</span></section><h4 className="eyebrow">{p.labels.credentials}</h4>{p.certifications.map(c=><div className="credential" key={c.name}><h3>{c.url?<a href={c.url}>{c.name} ↗</a>:c.name}</h3><small>{c.issuer}</small></div>)}<h4 className="eyebrow">{p.labels.achievements}</h4><ul className="achievement-list">{p.achievements.map(a=><li key={a}>{a}</li>)}</ul></>:null}

 {panel==='Experience'?<><span className="eyebrow">{p.labels.experience}</span><h2>{p.labels.experienceHeading}</h2>{p.experience.map(e=><section className="credential" key={e.title+e.organization}><h3>{e.title}</h3><small>{e.organization} · {e.dates}</small><p className="bio">{e.description}</p></section>)}</>:null}

 {panel==='Contact'?<><span className="eyebrow">{p.availability}</span><h2>{p.labels.contactHeading}</h2><a className="email-address" href={`mailto:${p.email}`}>{p.email}<ArrowUpRight size={20}/></a><SocialLinks/><ContactForm/></>:null}
 <div className="panel-footer"><button className="text-link" onClick={()=>select('About')}><UserRound size={14}/>{p.labels.about}</button><button className="secondary" onClick={()=>select(panel==='Contact'?'Profile':'Contact')}>{panel==='Contact'?p.labels.restore:p.labels.contact}<ArrowUpRight size={14}/></button></div>
 </div></motion.section>:<button className="restore" onClick={()=>select('Profile')}><UserRound size={24}/>{p.labels.restore}<CornerDownLeft size={18}/></button>}</AnimatePresence></main>

 <aside className="right-widgets"><section className="widget focus-widget"><div className="eyebrow"><i/>{p.labels.interests}</div>{p.focus.map((f,i)=><div className="focus-row" key={f}><span>0{i+1}</span><b>{f}</b></div>)}</section><section className="widget education-widget"><GraduationCap size={22}/><span className="eyebrow">{p.education.dates}</span><strong>{p.education.grade.split(' ')[0]}<small>{p.labels.cgpa}</small></strong><p>{p.education.degree}</p><small>{p.education.school}</small></section><section className="widget workflow"><span className="eyebrow">{p.labels.workflow}</span>{p.workflow.map((w,i)=><div key={w}><span className="step-dot"/><span>{w}</span><small>0{i+1}</small></div>)}</section></aside></div>

 <footer className="desktop-footer"><span>© {new Date().getFullYear()} {p.name}</span><span>{p.labels.footer}</span></footer><nav className="dock" aria-label={p.labels.nav}>{navigation.map((n,i)=>{const Icon=icons[i] || Code2;return <button className={panel===n&&opened?'active':''} key={n} onClick={()=>select(n)} aria-label={n} aria-current={panel===n&&opened?'page':undefined}><Icon size={21}/><span className="tooltip">{n}</span></button>})}<span className="dock-divider"/><a href={p.resume} target="_blank" aria-label={p.labels.download}><FileText size={21}/><span className="tooltip">{p.labels.cv}</span></a><a href={p.github} aria-label={p.labels.github}><Github size={21}/><span className="tooltip">{p.labels.github}</span></a><a href={p.linkedin} aria-label={p.labels.linkedin}><Linkedin size={21}/><span className="tooltip">{p.labels.linkedin}</span></a><a href={p.x} aria-label={p.labels.x}><span className="x-icon">𝕏</span><span className="tooltip">{p.labels.x}</span></a></nav></div>

}

