// Instantiate a new faceIO object with your application's Public ID
const faceio = new faceIO("");

function enrollNewUser(){
  const faceio = new faceIO("");


  faceio.enroll({
    "locale": "auto", // Default user locale
    "payload": {
        /* The payload we want to associate with this particular user which is forwarded back to us upon future authentication of this user.*/
        "whoami": "", // Dummy ID linked to this particular user
        "email": ""
        }
    }).then(userInfo => {
        // User Successfully Enrolled! 
        alert(
            `User Successfully Enrolled! Details:
           Unique Facial ID: ${userInfo.facialId}
           Enrollment Date: ${userInfo.timestamp}
           Gender: ${userInfo.details.gender}
           Age Approximation: ${userInfo.details.age}`
        );
       console.log(userInfo);
       // handle success, save the facial ID (userInfo.facialId), redirect to the dashboard...
    }).catch(errCode => {
       // Something went wrong during enrollment, log the failure
       handleError(errCode);
       console.error(errCode)
    })
};

enrollNewUser();
