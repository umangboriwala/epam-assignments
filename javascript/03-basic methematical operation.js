function basicOp(operation, value1, value2)
{
  // Code
  var result;
  if(operation == '+')
    return result = (value1 + value2);
  else if(operation == '-')
   return result = (value1 - value2);
  else if(operation == '*')
    return result = (value1 * value2);
  else if(operation == '/')
   return result = (value1 / value2);
  else
    return "Wrong choice..";
}