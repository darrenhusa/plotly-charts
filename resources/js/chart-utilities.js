function calculate_array_total(arr1, arr2, arr3)
{
  var total = [];

  for (var i=0; i<arr1.length; i++)
  {
    total[i] = arr1[i] + arr2[i] + arr3[i];
  }
  return total;
}

function calculate_array_percentages(arr1, total)
{
  var percent = [];

  for(var i in arr1)
  {
    percent[i] = Math.round(100*arr1[i]/total[i]);
  }
  return percent;
}

export { calculate_array_total, calculate_array_percentages };
