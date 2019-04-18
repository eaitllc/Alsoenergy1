/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here
//****************************

//grouping function
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

//tranform into output format; can accept various group names
function ReadArrayofJsonObjects(objects) {
    var result = groupBy(objects, 'group')

    //get unique values from groupp
    var group_categories = [];
    $.each(objects, function (item) {
        group_categories.push(this.group);
    });
    group_categories = Array.from(new Set(group_categories.sort()));

    //loop through each group
    output_object = {}
    for (i = 0; i < group_categories.length; ++i){
        entries = result[group_categories[i]]
        receiving_array = []
        for (j = 0; j < entries.length; j++) {
            obj = {}
            obj['name'] = entries[j].first + " " + entries[j].last
            receiving_array.push(obj)
        }
        output_object[(group_categories[i]).toLowerCase()] = receiving_array.sort()
    };
    document.getElementById("output").innerHTML = JSON.stringify(output_object);
}


//called when body is loading 
function BodyOnLoad() {
    ReadArrayofJsonObjects(employees);
}

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
