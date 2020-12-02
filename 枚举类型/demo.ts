enum Status {
  OFFLINE,
  ONLINE,
  DELETE
}

console.log(Status);

function getResult(status) {
  if(status === Status.OFFLINE) {
    return 'offline';
  }
  if(status === Status.ONLINE) {
    return 'online';
  }
  if(status === Status.DELETE) {
    return 'delete';
  }
  return 'error';
}

console.log(getResult(0));