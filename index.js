let acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(acl.x, acl.y, acl.z);
});
acl.addEventListener("error", (error) => {
  console.log(error);
});
acl.start();
