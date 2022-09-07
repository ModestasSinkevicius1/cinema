function getId(key) {
  let id = localStorage.getItem(key + "_id");
  if (id === null) {
    id = 0;
  } else {
    id = parseInt(id);
  }
  id++;
  localStorage.setItem(key + "_id", id);
  return id;
}

function readData(key){
    const data = localStorage.getItem(key);
    if(null === data){
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    return JSON.parse(data);
}

function write(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

// CRUD

export function create(key, data) {
    const d = readData(key);
    data.id = getId(key);
    d.push(data);
    write(key, d);
}

export function read(key) {
    return readData(key);
}

export function update(key, data, newKey) {
    const d = readData(key);
    write(key, d.map(row => row.id !== newKey ? {...row} : {...row, ...data, id: newKey}));
}

export function erase(key, id){
    const d = readData(key);
    write(key, d.filter(row => row.id !== id));
}