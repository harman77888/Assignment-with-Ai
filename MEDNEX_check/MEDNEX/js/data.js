/* MEDNEX demo data — fictional demonstration data only. */
const MEDNEX_SEED = {
  doctors: [
    {id:"D001",name:"Dr. Aarav Sharma",specialty:"Cardiology",departmentId:"DEP01",experience:14,qualification:"MBBS, MD, DM Cardiology",languages:["English","Hindi","Punjabi"],fee:1200,availability:"Available",rating:4.9,location:"Chandigarh",image:"assets/images/doctor-1.svg",about:"Focused on preventive and interventional cardiac care with a patient-first consultation approach.",expertise:["Preventive Cardiology","Hypertension","Heart Failure"],slots:["09:30","10:30","12:00","16:30"]},
    {id:"D002",name:"Dr. Meera Kapoor",specialty:"Neurology",departmentId:"DEP02",experience:11,qualification:"MBBS, MD, DM Neurology",languages:["English","Hindi"],fee:1400,availability:"Available",rating:4.8,location:"Mohali",image:"assets/images/doctor-2.svg",about:"Specializes in adult neurological consultations and long-term care planning.",expertise:["Headache Care","Movement Disorders","Neurology"],slots:["10:00","11:30","15:00","17:00"]},
    {id:"D003",name:"Dr. Kabir Singh",specialty:"Orthopedics",departmentId:"DEP03",experience:16,qualification:"MBBS, MS Orthopedics",languages:["English","Punjabi","Hindi"],fee:1100,availability:"Busy",rating:4.7,location:"Panchkula",image:"assets/images/doctor-3.svg",about:"Provides evidence-informed orthopedic consultations for mobility and musculoskeletal concerns.",expertise:["Sports Injury","Joint Care","Rehabilitation"],slots:["09:00","13:00","14:30"]},
    {id:"D004",name:"Dr. Ananya Verma",specialty:"Dermatology",departmentId:"DEP04",experience:9,qualification:"MBBS, MD Dermatology",languages:["English","Hindi"],fee:900,availability:"Available",rating:4.9,location:"Chandigarh",image:"assets/images/doctor-4.svg",about:"Provides dermatology consultations with emphasis on practical, sustainable skin-care plans.",expertise:["Acne Care","Clinical Dermatology","Skin Health"],slots:["09:30","11:00","14:00","16:00"]},
    {id:"D005",name:"Dr. Rohan Bedi",specialty:"Pediatrics",departmentId:"DEP05",experience:13,qualification:"MBBS, MD Pediatrics",languages:["English","Punjabi","Hindi"],fee:1000,availability:"Available",rating:4.8,location:"Mohali",image:"assets/images/doctor-5.svg",about:"Pediatric consultations focused on preventive care, growth monitoring and family education.",expertise:["Child Health","Vaccination Guidance","Growth Care"],slots:["10:00","12:30","15:30"]},
    {id:"D006",name:"Dr. Simran Kaur",specialty:"Gynecology",departmentId:"DEP07",experience:12,qualification:"MBBS, MS Obstetrics & Gynecology",languages:["English","Punjabi","Hindi"],fee:1300,availability:"Available",rating:4.9,location:"Chandigarh",image:"assets/images/doctor-6.svg",about:"Women's health consultations with a focus on preventive and routine gynecological care.",expertise:["Women's Health","Preventive Care","Gynecology"],slots:["09:00","11:00","15:00","17:30"]}
  ],
  departments: [
    {id:"DEP01",name:"Cardiology",description:"Comprehensive cardiac consultations, diagnostics coordination and preventive heart care.",services:["Cardiac Consultation","ECG Coordination","Heart Health Planning"],contact:"+91 1800 100 2201"},
    {id:"DEP02",name:"Neurology",description:"Specialist neurological consultations and coordinated follow-up care.",services:["Neurology Consultation","Headache Clinic","Movement Care"],contact:"+91 1800 100 2202"},
    {id:"DEP03",name:"Orthopedics",description:"Musculoskeletal, joint and mobility-focused clinical services.",services:["Joint Consultation","Sports Injury","Rehabilitation"],contact:"+91 1800 100 2203"},
    {id:"DEP04",name:"Dermatology",description:"Clinical dermatology and skin-health consultation services.",services:["Skin Consultation","Acne Care","Clinical Follow-up"],contact:"+91 1800 100 2204"},
    {id:"DEP05",name:"Pediatrics",description:"Child-focused consultations and preventive healthcare support.",services:["Child Consultation","Growth Review","Preventive Care"],contact:"+91 1800 100 2205"},
    {id:"DEP06",name:"General Medicine",description:"Everyday adult healthcare, preventive reviews and coordinated care.",services:["General Consultation","Health Review","Care Coordination"],contact:"+91 1800 100 2206"},
    {id:"DEP07",name:"Gynecology",description:"Women's health services and routine gynecological consultations.",services:["Women's Health","Routine Consultation","Preventive Care"],contact:"+91 1800 100 2207"},
    {id:"DEP08",name:"ENT",description:"Assessment and consultation support for ear, nose and throat concerns.",services:["ENT Consultation","Hearing Review","Sinus Care"],contact:"+91 1800 100 2208"},
    {id:"DEP09",name:"Ophthalmology",description:"Eye-care consultations and diagnostic coordination.",services:["Eye Consultation","Vision Review","Ophthalmic Care"],contact:"+91 1800 100 2209"},
    {id:"DEP10",name:"Radiology",description:"Imaging coordination and diagnostic reporting workflows.",services:["Imaging Coordination","Report Review","Diagnostic Support"],contact:"+91 1800 100 2210"}
  ],
  patients: [
    {id:"P1001",name:"Aditi Malhotra",age:31,gender:"Female",lastVisit:"2026-09-18",condition:"Routine cardiac review",nextAppointment:"2026-10-03"},
    {id:"P1002",name:"Karan Mehta",age:44,gender:"Male",lastVisit:"2026-09-16",condition:"Neurology follow-up",nextAppointment:"2026-10-01"},
    {id:"P1003",name:"Harleen Kaur",age:27,gender:"Female",lastVisit:"2026-09-14",condition:"Dermatology consultation",nextAppointment:"2026-10-05"},
    {id:"P1004",name:"Arjun Sethi",age:52,gender:"Male",lastVisit:"2026-09-11",condition:"Orthopedic review",nextAppointment:"2026-09-29"},
    {id:"P1005",name:"Nisha Bansal",age:36,gender:"Female",lastVisit:"2026-09-09",condition:"General medicine review",nextAppointment:"2026-10-08"},
    {id:"P1006",name:"Ritika Sharma",age:22,gender:"Female",lastVisit:"2026-09-07",condition:"Preventive review",nextAppointment:"2026-10-12"}
  ],
  appointments: [
    {id:"APT-24091",patientId:"P1001",doctorId:"D001",departmentId:"DEP01",date:"2026-10-03",time:"10:30",type:"In-person",status:"Confirmed",reason:"Routine cardiac review"},
    {id:"APT-24092",patientId:"P1002",doctorId:"D002",departmentId:"DEP02",date:"2026-10-01",time:"11:30",type:"Video Consultation",status:"Pending",reason:"Follow-up consultation"},
    {id:"APT-24093",patientId:"P1003",doctorId:"D004",departmentId:"DEP04",date:"2026-10-05",time:"14:00",type:"In-person",status:"Confirmed",reason:"Skin health consultation"},
    {id:"APT-24094",patientId:"P1004",doctorId:"D003",departmentId:"DEP03",date:"2026-09-29",time:"13:00",type:"In-person",status:"Completed",reason:"Mobility review"},
    {id:"APT-24095",patientId:"P1005",doctorId:"D006",departmentId:"DEP07",date:"2026-10-08",time:"15:00",type:"Video Consultation",status:"Confirmed",reason:"Routine consultation"}
  ],
  records: [
    {id:"MR-7001",date:"2026-09-18",doctorId:"D001",departmentId:"DEP01",diagnosis:"Routine cardiac review",notes:"Demo record: follow-up plan documented.",attachment:"Available"},
    {id:"MR-7002",date:"2026-09-16",doctorId:"D002",departmentId:"DEP02",diagnosis:"Neurology follow-up",notes:"Demo record: consultation summary available.",attachment:"Available"},
    {id:"MR-7003",date:"2026-09-14",doctorId:"D004",departmentId:"DEP04",diagnosis:"Dermatology consultation",notes:"Demo record: care instructions documented.",attachment:"Available"},
    {id:"MR-7004",date:"2026-09-11",doctorId:"D003",departmentId:"DEP03",diagnosis:"Orthopedic review",notes:"Demo record: mobility review completed.",attachment:"Not attached"}
  ],
  prescriptions: [
    {id:"RX-3101",doctorId:"D001",date:"2026-09-18",medicines:[{name:"Demo medicine A",dose:"As directed",duration:"14 days"}],instructions:"Fictional demonstration prescription. Follow clinician guidance.",status:"Active"},
    {id:"RX-3102",doctorId:"D002",date:"2026-09-16",medicines:[{name:"Demo medicine B",dose:"As directed",duration:"7 days"}],instructions:"Fictional demonstration prescription. Follow clinician guidance.",status:"Active"},
    {id:"RX-3103",doctorId:"D004",date:"2026-09-14",medicines:[{name:"Demo medicine C",dose:"As directed",duration:"10 days"}],instructions:"Fictional demonstration prescription. Follow clinician guidance.",status:"Completed"}
  ],
  reports: [
    {id:"LAB-5501",test:"CBC",doctorId:"D001",date:"2026-09-18",status:"Completed",result:"Within demo reference range"},
    {id:"LAB-5502",test:"Lipid Profile",doctorId:"D001",date:"2026-09-18",status:"Review Required",result:"Demo result — clinician review indicated"},
    {id:"LAB-5503",test:"Neurology Screening Panel",doctorId:"D002",date:"2026-09-16",status:"Normal",result:"Demo result — within demo reference range"},
    {id:"LAB-5504",test:"Skin Assessment",doctorId:"D004",date:"2026-09-14",status:"Pending",result:"Awaiting demo processing"}
  ],
  billing: [
    {id:"INV-8001",service:"Cardiology Consultation",date:"2026-09-18",amount:1200,status:"Paid"},
    {id:"INV-8002",service:"Laboratory Services",date:"2026-09-18",amount:1850,status:"Paid"},
    {id:"INV-8003",service:"Neurology Consultation",date:"2026-09-16",amount:1400,status:"Pending"},
    {id:"INV-8004",service:"Orthopedic Consultation",date:"2026-09-11",amount:1100,status:"Processing"}
  ],
  notifications: [
    {id:"N001",text:"Your appointment with Dr. Sharma is confirmed.",time:"Today, 09:42",read:false},
    {id:"N002",text:"Your CBC report is ready.",time:"Yesterday, 18:20",read:false},
    {id:"N003",text:"Appointment scheduled for tomorrow at 10:30 AM.",time:"Sep 22, 14:05",read:true},
    {id:"N004",text:"Payment received successfully.",time:"Sep 21, 11:18",read:true}
  ],
  articles: [
    {id:"A01",title:"Building a practical preventive-care routine",category:"Wellness",read:"5 min read",date:"Sep 21, 2026",excerpt:"A simple framework for preparing for routine healthcare visits and keeping important information organized."},
    {id:"A02",title:"How to prepare for a specialist consultation",category:"Patient Guide",read:"4 min read",date:"Sep 18, 2026",excerpt:"Useful preparation steps for making a specialist appointment more focused and productive."},
    {id:"A03",title:"Understanding your digital health records",category:"Digital Health",read:"6 min read",date:"Sep 14, 2026",excerpt:"An overview of common record types and how a digital patient portal can organize them."},
    {id:"A04",title:"Questions to ask during a follow-up visit",category:"Patient Guide",read:"4 min read",date:"Sep 10, 2026",excerpt:"A concise checklist for capturing questions, next steps and follow-up details."}
  ],
  packages: [
    {id:"PK01",name:"Essential Health Review",price:2499,tag:"Routine",items:["General physician review","Basic wellness screening","Digital summary"]},
    {id:"PK02",name:"Executive Wellness",price:5999,tag:"Comprehensive",items:["Specialist consultation","Expanded screening","Care summary"]},
    {id:"PK03",name:"Family Care Plan",price:7999,tag:"Family",items:["Multi-member review","Preventive planning","Digital care coordination"]}
  ],
  services: [
    {name:"Specialist Consultations",desc:"Connect with experienced specialists through in-person or video consultations.",icon:"SC"},
    {name:"Diagnostics & Reports",desc:"Organize laboratory and diagnostic workflows in one connected experience.",icon:"DR"},
    {name:"Digital Medical Records",desc:"Keep appointments, records, reports and prescriptions easy to access.",icon:"MR"},
    {name:"Preventive Health",desc:"Plan routine health reviews with structured packages and reminders.",icon:"PH"}
  ]
};

const DEMO_KEYS = Object.keys(MEDNEX_SEED);
function clone(v){ return JSON.parse(JSON.stringify(v)); }
function seedStorage(){
  DEMO_KEYS.forEach(k=>{
    if(localStorage.getItem("mednex_"+k)===null) localStorage.setItem("mednex_"+k, JSON.stringify(clone(MEDNEX_SEED[k])));
  });
}
function getData(key){ seedStorage(); return JSON.parse(localStorage.getItem("mednex_"+key) || "[]"); }
function setData(key,value){ localStorage.setItem("mednex_"+key, JSON.stringify(value)); window.dispatchEvent(new CustomEvent("mednex:data",{detail:{key}})); }
function getById(key,id){ return getData(key).find(x=>x.id===id); }
function doctorName(id){ return getById("doctors",id)?.name || "Assigned clinician"; }
function departmentName(id){ return getById("departments",id)?.name || "General Medicine"; }
function patientName(id){ return getById("patients",id)?.name || "Demo Patient"; }
function money(v){ return "₹"+Number(v||0).toLocaleString("en-IN"); }
function formatDate(v){ if(!v) return "—"; return new Date(v+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}); }
function escapeHTML(v){ return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }
seedStorage();
