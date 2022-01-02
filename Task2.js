function vaxTrail(PeopleInfo) {

                                    let A = []
                                    let B = []
                                    let C = []
                                    let D = []

    PeopleInfoList.forEach((data) => {
        if (data.age >= 20 && data.age <= 30 && data.temperature < 100) { A.push(data) }
        else if (data.age >= 31 && data.age <= 40 && data.temperature < 100) { B.push(data) }
        else if (data.age >= 41 && data.age <= 50 && data.temperature < 100) { C.push(data) }
        else if (data.temperature >= 100) { D.push(data) }
    }

    )
    return { A, B, C, D }

}

const PeopleInfoList = [

  
    {
        name: 'Bilap', age: 25, temperature: 94
    },
    {
        name: 'Sunil', age: 21, temperature: 97
    },

    
    {
        name: 'Paul', age: 47, temperature: 98
    },
    {
      name: 'Kat', age: 41, temperature: 98
    },

  {
    name: 'Kabir', age: 36, temperature: 99
  },
  {
    name: 'Rahul', age: 37, temperature: 98
  },

    {
        name: 'Nayem', age: 52, temperature: 100
    },
    {
        name: 'Shbnaj', age: 50, temperature: 105
    },
    
    

  ]

console.log(vaxTrail(PeopleInfoList));