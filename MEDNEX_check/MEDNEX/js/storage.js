function saveAppointment(appointment){
  const items=getData("appointments"); items.unshift(appointment); setData("appointments",items);
}
function removeById(key,id){ setData(key,getData(key).filter(x=>x.id!==id)); }
function updateById(key,id,patch){
  setData(key,getData(key).map(x=>x.id===id?{...x,...patch}:x));
}
function uid(prefix){ return prefix+"-"+Math.random().toString(36).slice(2,8).toUpperCase(); }
function getSession(){ return JSON.parse(localStorage.getItem("mednex_session")||"null"); }
function setSession(session){ localStorage.setItem("mednex_session",JSON.stringify(session)); }
function clearSession(){ localStorage.removeItem("mednex_session"); }
