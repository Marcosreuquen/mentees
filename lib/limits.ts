export function setLimitsAndOffset(limit: any, offset: any) {
  if (limit == undefined) {
    limit = 100;
  } else {
    limit = parseInt(limit);
  }
  if (offset == undefined) {
    offset = 0;
  } else {
    offset = parseInt(offset);
  }
  const maxLimit = 100;
  const maxOffset = 10000;

  const finalLimit = limit <= maxLimit ? limit : maxLimit;
  const finalOffset = offset <= maxOffset ? offset : maxLimit;

  return {
    finalLimit,
    finalOffset,
  };
}
