const removeFromArray = function (values, ...remove)
{
   remove.forEach(num => {
        let index;
        // Keep removing num while it exists in arr
        while ((index = values.indexOf(num)) !== -1) {
            values.splice(index, 1);  // Remove the number at index
        }
    });

    return values;  // Return the modified array
}


    





































// Do not edit below this line
module.exports = removeFromArray;
