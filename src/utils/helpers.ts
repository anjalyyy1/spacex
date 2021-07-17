const groupByValue = (data: any[], key: string) => {
  const result = data.reduce((r, a) => {
    r[a[key]] = r[a[key]] || [];
    r[a[key]].push(a);
    return r;
  }, Object.create(null));
  return result;
};

const sortDate = (data: any[]) => {
  const result = data.sort(function (a: any, b: any) {
    return (
      new Date(a.launch_date_utc).getTime() -
      new Date(b.launch_date_utc).getTime()
    );
  });
  return result;
};

export { groupByValue, sortDate };
