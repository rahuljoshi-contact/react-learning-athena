// API proxy

export default function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("no response from json-server");
  });
}

export function deleteUser(userid) {
  return fetch("http://localhost:3001/users/" + userid, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("no response from json-server");
  });
}
