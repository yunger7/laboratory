const ref = firebase.firestore().collection('requests');
ref.onSnapshot(snapshot => {
  let requests = [];
  snapshot.forEach(doc => {
    requests.push({...doc.data(), id: doc.id})
  });
  console.log(requests);
});