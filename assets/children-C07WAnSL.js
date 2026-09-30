function d(t,r){return t.filter(e=>e.careTeamId===r.careTeamId).sort((e,a)=>Date.parse(e.createdAt)-Date.parse(a.createdAt)||e.id.localeCompare(a.id)).findIndex(e=>e.id===r.id)}export{d as c};
