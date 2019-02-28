export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAuiuDCJk_LGDlNbGiuTgIyIY9_AUy4ToE",
    authDomain: "ionic-crud-ec51d.firebaseapp.com",
    databaseURL: "https://ionic-crud-ec51d.firebaseio.com",
    projectId: "ionic-crud-ec51d",
    storageBucket: "ionic-crud-ec51d.appspot.com",
    messagingSenderId: "154680045054"
  };

export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });
    return returnArray;
}