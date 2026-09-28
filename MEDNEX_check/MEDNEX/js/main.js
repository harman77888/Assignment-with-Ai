document.addEventListener("DOMContentLoaded",()=>{
  seedStorage();
  document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
  document.querySelectorAll("[data-nav-toggle]").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".sidebar")?.classList.toggle("open")));
  document.querySelectorAll("[data-mobile-nav]").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".nav-links")?.classList.toggle("show")));
  document.querySelectorAll("[data-modal-close]").forEach(btn=>btn.addEventListener("click",closeModal));
  document.querySelectorAll(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModal();}));
  initPage();
});
function openModal(title,body){
  const m=document.getElementById("globalModal"); if(!m)return;
  m.querySelector(".modal-title").textContent=title;m.querySelector(".modal-body").innerHTML=body;m.classList.add("show");
}
function closeModal(){document.querySelectorAll(".modal-backdrop").forEach(m=>m.classList.remove("show"))}
function toast(message){
  let t=document.getElementById("toast"); if(!t){t=document.createElement("div");t.id="toast";t.style.cssText="position:fixed;right:20px;bottom:20px;z-index:2000;background:#0b2440;color:#fff;padding:13px 16px;border-radius:10px;box-shadow:0 12px 30px rgba(0,0,0,.2);font-size:13px;font-weight:750;transform:translateY(20px);opacity:0;transition:.2s";document.body.appendChild(t)}
  t.textContent=message;t.style.opacity=1;t.style.transform="translateY(0)";clearTimeout(window.__toast);window.__toast=setTimeout(()=>{t.style.opacity=0;t.style.transform="translateY(20px)"},2600);
}
function initPage(){
  const page=document.body.dataset.page;
  if(page==="home")renderHome();
  if(page==="doctors")renderDoctors();
  if(page==="departments")renderDepartments();
  if(page==="services")renderServices();
  if(page==="packages")renderPackages();
  if(page==="articles")renderArticles();
  if(page==="appointment")initAppointment();
  if(page==="contact")initContact();
  if(page==="doctor-profile")initDoctorProfile();
  if(page==="login")initLogin();
  if(page==="register")initRegister();
}
function renderHome(){
  const docs=document.getElementById("featuredDoctors"); if(docs){
    docs.innerHTML=getData("doctors").slice(0,3).map(d=>doctorCard(d)).join("");
  }
  const deps=document.getElementById("homeDepartments"); if(deps){
    deps.innerHTML=getData("departments").slice(0,6).map(d=>`<div class="card pad"><div class="feature-icon">${d.name.slice(0,2).toUpperCase()}</div><h3>${escapeHTML(d.name)}</h3><p class="muted">${escapeHTML(d.description)}</p><a class="btn btn-outline" href="departments.html">Explore department</a></div>`).join("");
  }
  const arts=document.getElementById("homeArticles"); if(arts) arts.innerHTML=getData("articles").slice(0,3).map(articleCard).join("");
}
function doctorCard(d){
  return `<div class="card doctor-card pad"><div class="doctor-top"><img class="avatar-lg" src="${d.image}" alt="${escapeHTML(d.name)}"><div><h3>${escapeHTML(d.name)}</h3><div class="doctor-meta">${escapeHTML(d.specialty)} · ${d.experience} years</div><div class="doctor-meta">${escapeHTML(d.location)}</div></div></div><div class="card-bottom"><span class="status ${d.availability==="Available"?"status-available":"status-pending"}">${d.availability}</span><a class="btn btn-outline" href="doctor-profile.html?id=${d.id}">View profile</a></div></div>`;
}
function renderDoctors(){
  const list=document.getElementById("doctorList"), search=document.getElementById("doctorSearch"), spec=document.getElementById("specialtyFilter"), dep=document.getElementById("departmentFilter"), exp=document.getElementById("experienceFilter"), avail=document.getElementById("availabilityFilter"), sort=document.getElementById("doctorSort");
  const doctors=getData("doctors");
  if(spec) [...new Set(doctors.map(x=>x.specialty))].sort().forEach(x=>spec.insertAdjacentHTML("beforeend",`<option>${x}</option>`));
  if(dep) getData("departments").forEach(x=>dep.insertAdjacentHTML("beforeend",`<option value="${x.id}">${x.name}</option>`));
  function draw(){
    let a=doctors.filter(d=>(!search.value||`${d.name} ${d.specialty} ${d.location}`.toLowerCase().includes(search.value.toLowerCase()))&&(!spec.value||d.specialty===spec.value)&&(!dep.value||d.departmentId===dep.value)&&(!exp.value||d.experience>=+exp.value)&&(!avail.value||d.availability===avail.value));
    if(sort.value==="exp")a.sort((x,y)=>y.experience-x.experience); if(sort.value==="fee")a.sort((x,y)=>x.fee-y.fee);
    list.innerHTML=a.length?a.map(doctorCard).join(""):`<div class="empty card">No doctors match the selected filters.</div>`;
  }
  [search,spec,dep,exp,avail,sort].forEach(e=>e?.addEventListener("input",draw)); draw();
}
function renderDepartments(){
  const list=document.getElementById("departmentList"), search=document.getElementById("departmentSearch");
  function draw(){const a=getData("departments").filter(d=>!search.value||`${d.name} ${d.description}`.toLowerCase().includes(search.value.toLowerCase()));list.innerHTML=a.map(d=>`<div class="card pad"><div class="feature-icon">${d.name.slice(0,2).toUpperCase()}</div><h3>${escapeHTML(d.name)}</h3><p class="muted">${escapeHTML(d.description)}</p><div class="pill-row">${d.services.map(s=>`<span class="tag" style="background:#edf5f8;color:#31546e">${escapeHTML(s)}</span>`).join("")}</div><div class="divider"></div><div class="doctor-meta">${getData("doctors").filter(x=>x.departmentId===d.id).length} demo doctors · Appointments available</div><p class="doctor-meta">${d.contact}</p></div>`).join("")}search.addEventListener("input",draw);draw();
}
function renderServices(){const e=document.getElementById("serviceList");e.innerHTML=getData("services").map(s=>`<div class="card service-card"><div class="feature-icon">${s.icon}</div><h3>${escapeHTML(s.name)}</h3><p class="muted">${escapeHTML(s.desc)}</p><a href="appointment.html" class="btn btn-outline">Explore care</a></div>`).join("")}
function renderPackages(){const e=document.getElementById("packageList");e.innerHTML=getData("packages").map((p,i)=>`<div class="card package-card ${i===1?"featured":""}">${i===1?'<span class="tag" style="background:#e5f7f5;color:#0f716f">Comprehensive</span>':""}<h3>${escapeHTML(p.name)}</h3><div class="package-price">${money(p.price)}</div><ul>${p.items.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul><a class="btn btn-primary" href="appointment.html">Request consultation</a></div>`).join("")}
function articleCard(a){return `<div class="card article-card"><div class="article-thumb"></div><div class="article-body"><span class="eyebrow">${escapeHTML(a.category)}</span><h3>${escapeHTML(a.title)}</h3><p class="muted">${escapeHTML(a.excerpt)}</p><div class="doctor-meta">${a.date} · ${a.read}</div></div></div>`}
function renderArticles(){const e=document.getElementById("articleList"),s=document.getElementById("articleSearch");function draw(){e.innerHTML=getData("articles").filter(a=>!s.value||`${a.title} ${a.category}`.toLowerCase().includes(s.value.toLowerCase())).map(articleCard).join("")}s?.addEventListener("input",draw);draw()}
function initAppointment(){
  const form=document.getElementById("appointmentForm"),doc=document.getElementById("apptDoctor"),dep=document.getElementById("apptDepartment"),date=document.getElementById("apptDate"),slot=document.getElementById("apptTime");
  getData("doctors").forEach(d=>doc.insertAdjacentHTML("beforeend",`<option value="${d.id}">${d.name} — ${d.specialty}</option>`));
  getData("departments").forEach(d=>dep.insertAdjacentHTML("beforeend",`<option value="${d.id}">${d.name}</option>`));
  function slots(){const d=getById("doctors",doc.value);slot.innerHTML=(d?.slots||[]).map(x=>`<option>${x}</option>`).join("")||"<option>No demo slots</option>";}
  doc.addEventListener("change",()=>{const d=getById("doctors",doc.value);dep.value=d?.departmentId||"";slots()});date.addEventListener("change",slots);slots();
  form.addEventListener("submit",e=>{e.preventDefault();const f=new FormData(form), d=getById("doctors",f.get("doctor"));const a={id:uid("APT"),patientId:"P1001",doctorId:d.id,departmentId:d.departmentId,date:f.get("date"),time:f.get("time"),type:f.get("type"),status:"Confirmed",reason:f.get("reason")};saveAppointment(a);openModal("Appointment confirmed",`<div class="notice">Your demo appointment has been created successfully.</div><div class="divider"></div><p><strong>${a.id}</strong></p><p>${d.name}<br>${formatDate(a.date)} at ${a.time}<br>${departmentName(a.departmentId)} · ${a.type}</p><button class="btn btn-primary" onclick="closeModal()">Done</button>`);form.reset();slots()})
}
function initContact(){document.getElementById("contactForm")?.addEventListener("submit",e=>{e.preventDefault();toast("Demo enquiry submitted successfully.");e.target.reset()})}
function initDoctorProfile(){const id=new URLSearchParams(location.search).get("id")||"D001",d=getById("doctors",id);if(!d)return;document.getElementById("doctorProfile").innerHTML=`<div class="card pad doctor-profile-card"><img src="${d.image}" alt="${escapeHTML(d.name)}"><h2>${escapeHTML(d.name)}</h2><p class="eyebrow">${escapeHTML(d.specialty)}</p><p class="muted">${escapeHTML(d.qualification)}</p><span class="status status-available">${d.availability}</span></div><div class="card pad"><div class="eyebrow">${escapeHTML(departmentName(d.departmentId))}</div><h2>Professional profile</h2><p class="muted">${escapeHTML(d.about)}</p><div class="grid grid-3" style="margin-top:24px"><div><strong>${d.experience} years</strong><div class="doctor-meta">Experience</div></div><div><strong>${money(d.fee)}</strong><div class="doctor-meta">Consultation fee</div></div><div><strong>${d.rating}/5</strong><div class="doctor-meta">Demo rating</div></div></div><div class="divider"></div><h3>Areas of expertise</h3><div class="pill-row">${d.expertise.map(x=>`<span class="tag" style="background:#edf5f8;color:#31546e">${x}</span>`).join("")}</div><div class="divider"></div><h3>Available slots</h3><div class="pill-row">${d.slots.map(x=>`<span class="tag" style="background:#eaf8f0;color:#137a45">${x}</span>`).join("")}</div><div class="divider"></div><a class="btn btn-primary" href="appointment.html?doctor=${d.id}">Book Appointment</a></div>`}
function initLogin(){document.getElementById("loginForm")?.addEventListener("submit",e=>{e.preventDefault();const role=document.getElementById("loginRole").value;setSession({name:role==="admin"?"MEDNEX Admin":role==="doctor"?"Dr. Aarav Sharma":"Aditi Malhotra",role});location.href=role==="admin"?"admin/dashboard.html":role==="doctor"?"doctor/dashboard.html":"patient/dashboard.html"})}
function initRegister(){document.getElementById("registerForm")?.addEventListener("submit",e=>{e.preventDefault();const p=document.getElementById("regPassword").value,c=document.getElementById("regConfirm").value;if(p!==c){toast("Passwords do not match.");return}toast("Demo account created. Redirecting to login.");setTimeout(()=>location.href="login.html",600)})}
