let firstDropArray = []
let secondDropArray = []
let finalAttributes = []
let firstAttribute
let price1
let firstLevel = 5
let secondAttribute
let price2
let secondLevel = 4
let attributeTrue = false
let totalPrice
let tabasco = true
let corePercent = .03
const drops = {
  primary: [
    {name: "Mandraa",
    chance: .014,
    price: 5000000},
    {name: "Enrager",
    chance: .0000032064,
    price: 3000000000},
    {name: "Burning Kuudra Core",
    chance: .008,
    price: 75000000},
    {name: "Aurora Staff",
    chance: .0321,
    price: 2000000},
    {name: "Hollow Wand",
    chance: .0321,
    price: 0},
    {name: "Fervor Helmet", 
    chance: .0401,
    price: "attribute bad"},
    {name: "Fervor Chestplate", 
    chance: .0401,
    price: "attribute"},
    {name: "Fervor Leggings", 
    chance: .0401,
    price: "attribute"},
    {name: "Fervor Boots", 
    chance: .0401,
    price: "attribute"},
    {name: "Aurora Helmet", 
    chance: .0401,
    price: "attribute bad"},
    {name: "Aurora Chestplate", 
    chance: .0401,
    price: "attribute"},
    {name: "Aurora Leggings", 
    chance: .0401,
        price: "attribute"},
        {name: "Aurora Boots", 
        chance: .0401,
        price: "attribute"},
        {name: "Crimson Helmet", 
        chance: .0401,
        price: "attribute bad"},
        {name: "Crimson Chestplate", 
        chance: .0401,
        price: "attribute"},
        {name: "Crimson Leggings", 
        chance: .0401,
        price: "attribute"},
        {name: "Crimson Boots", 
        chance: .0401,
        price: "attribute"},
        {name: "Terror Helmet", 
        chance: .0401,
        price: "attribute bad"},
        {name: "Terror Chestplate", 
        chance: .0401,
        price: "attribute"},
        {name: "Terror Leggings", 
        chance: .0401,
        price: "attribute"},
        {name: "Terror Boots", 
        chance: .0401,
        price: "attribute"},
        {name: "Hollow Helmet", 
        chance: .0401,
        price: "attribute bad"},
        {name: "Hollow Chestplate", 
        chance: .0401,
        price: "attribute"},
        {name: "Hollow Leggings", 
        chance: .0401,
        price: "attribute"},
        {name: "Hollow Boots", 
        chance: .0401,
        price: "attribute"},
    {name: "Molten Necklace",
        chance: .0281,
        price: "attribute big"},
        {name: "Molten Cloak",
        chance: .0281,
        price: "attribute big"},
        {name: "Molten Belt",
        chance: .0281,
        price: "attribute meh"},
        {name: "Molten Bracelet",
        chance: .0281,
        price: "attribute low"}
  ],
  secondary: [
    {name: "Fatal Tempo I",
    chance: .0014,
    price: 200000000},
    {name: "Inferno I",
    chance: .0014,
    price: 20000000},
    {name: "Wheel",
    chance: .0123,
    price: 18000000},
    {name: "Tentacle Dye",
    chance: .0000024624,
    price: 3000000000},
    {name: "Strong Mana V",
    chance: .1477,
    price: 1000000},
    {name: "Ferocious Mana V",
    chance: .1477,
    price: 2500000},
    {name: "Hardened Mana V",
    chance: .1477,
    price: 300000},
    {name: "Mana Vampire V",
    chance: .1477,
    price: 3000000},
    {name: "Midas Touch IV",
    chance: .0123,
    price: 0},
    {name: "Combo IV",
    chance: .0123,
    price: 0},
    {name: "Undead IV",
    chance: .0123,
    price: 0},
    {name: "Arachno IV",
    chance: .0123,
    price: 0},
    {name: "Speed IV",
    chance: .0123,
    price: 10000000},
    {name: "Mana Pool IV",
    chance: .0123,
    price: 14000000},
    {name: "Experience IV",
    chance: .0123,
    price: 0},
    {name: "Life Regeneration IV",
    chance: .0123,
    price: 0},
    {name: "Undead Resistance IV",
    chance: .0123,
    price: 0},
    {name: "Arachno Resistance IV",
    chance: .0123,
    price: 0},
    {name: "Hunter IV",
    chance: .0062,
    price: 0},
    {name: "Infection IV",
    chance: .0062,
    price: 0},
    {name: "Fishing Experience IV",
    chance: .0062,
    price: 0},
    {name: "Fisherman IV",
    chance: .0062,
    price: 0},
    {name: "Fishing Speed IV",
    chance: .0062,
    price: 0},
    {name: "Double Hook IV",
    chance: .0062,
    price: 0},
    {name: "Trophy Hunter IV",
    chance: .0062,
    price: 0},
    {name: "Blazing Fortune IV",
    chance: .0062,
    price: 0},
    {name: "Attack Speed IV",
    chance: .0123,
    price: 0},
    {name: "Elite IV",
    chance: .0123,
    price: 0},
    {name: "Life Recovery IV",
    chance: .0123,
    price: 0},
    {name: "Lifeline IV",
    chance: .0123,
    price: 0},
    {name: "Breeze IV",
    chance: .0123,
    price: 5000000},
    {name: "Ignition IV",
    chance: .0123,
    price: 0},
    {name: "Mana Steal IV",
    chance: .0123,
    price: 0},
    {name: "Mana Regeneration IV",
    chance: .0123,
    price: 10000000},
    {name: "Veteran IV",
    chance: .0123,
    price: 13000000},
    {name: "Vitality IV",
    chance: .0123,
    price: 8000000},
    {name: "Ender Resistance IV",
    chance: .0123,
    price: 0},
    {name: "Dominance IV",
    chance: .0123,
    price: 30000000},
    {name: "Blazing IV",
    chance: .0123,
    price: 0},
    {name: "Blazing Resistance IV",
    chance: .0123,
    price: 0},
    {name: "Warrior IV",
    chance: .0123,
    price: 0},
    {name: "Deadeye IV",
    chance: .0123,
    price: 0},
    {name: "Fortitude IV",
    chance: .0123,
    price: 0},
    {name: "Magic Find IV",
    chance: .0123,
    price: 15000000}
  ]
}
const attributes = [
    {name: "Arachno Resistance",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Blazing Resistance",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Breeze",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Dominance",
    chance: .0625,
    pricehelm: 9000000,
    price: 10000000,
    priceequip: 55000000,
    priceequip2: 55000000,
    priceequip3: 20000000},
    {name: "Ender Resistance",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Experience",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Fortitude",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Life Regeneration",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Lifeline",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Magic Find",
    chance: .0625,
    pricehelm: 8000000,
    price: 9000000,
    priceequip: 25000000,
    priceequip2: 25000000,
    priceequip3: 25000000},
    {name: "Mana Pool",
    chance: .0625,
    pricehelm: 3000000,
    price: 11000000,
    priceequip: 25000000,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Mana Regeneration",
    chance: .0625,
    pricehelm: 5000000,
    price: 10000000,
    priceequip: 20000000,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Vitality",
    chance: .0625,
    pricehelm: 5000000,
    price: 6000000,
    priceequip: 12000000,
    priceequip2: 10000000,
    priceequip3: 10000000},
    {name: "Speed",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 15000000,
    priceequip2: 14000000,
    priceequip3: 0},
    {name: "Undead Resistance",
    chance: .0625,
    pricehelm: 0,
    price: 0,
    priceequip: 0,
    priceequip2: 0,
    priceequip3: 0},
    {name: "Veteran",
    chance: .0625,
    pricehelm: 15000000,
    price: 12000000,
    priceequip: 20000000,
    priceequip2: 18000000,
    priceequip3: 18000000}
    ]
const godrolls = {
  crimson: [
    {
      attributes: ["Magic Find", "Veteran"],
      price: 430000000,
      pricehelm: 400000000
    },
    {
      attributes: ["Veteran", "Vitality"],
      price: 80000000,
      pricehelm: 35000000
    },
    {
      attributes: ["Magic Find", "Vitality"],
      price: 110000000,
      pricehelm: 65000000
    }
  ],
  terror: [
    {
    attributes: ["Dominance", "Vitality"],
    price: 160000000,
    pricehelm: 35000000
    }
  ],
  aurora: [
    {
      attributes: ["Mana Pool", "Mana Regeneration"],
      price: 410000000,
      pricehelm: 0
    },
    {
      attributes: ["Mana Pool", "Vitality"],
      price: 40000000,
      pricehelm: 10000000
    },
    {
      attributes: ["Mana Regeneration", "Vitality"],
      price: 75000000,
      pricehelm: 0
    },
    {
      attributes: ["Mana Regeneration", "Veteran"],
      price: 35000000,
      pricehelm: 0
    },
    {
      attributes: ["Mana Pool", "Veteran"],
      price: 30000000,
      pricehelm: 0
    }
  ],
  molten: [
    {
      attributes: ["Dominance", "Speed"],
      price: 225000000,
      price2: 175000000,
      price3: 0
    },
    {
      attributes: ["Magic Find", "Veteran"],
      price: 190000000,
      price2: 190000000,
      price3: 190000000
    },
    {
      attributes: ["Mana Pool", "Mana Regeneration"],
      price: 120000000,
      price2: 0,
      price3: 0
    },
    {
      attributes: ["Dominance", "Vitality"],
      price: 85000000,
      price2: 80000000,
      price3: 75000000
    },
    {
      attributes: ["Mana Regeneration", "Vitality"],
      price: 40000000,
      price2: 0,
      price3: 0
    },
    {
      attributes: ["Mana Pool", "Vitality"],
      price: 40000000,
      price2: 0,
      price3: 0
    },
  ]
}
let attributes2 = [...attributes]
const random1 = Math.random()
const random2 = Math.random()
if(random1 < corePercent) {
  firstLevel++
}
if(random2 < corePercent) {
  secondLevel++ 
}
let tabascoMoney = 0
if(tabasco) {
  tabascoMoney = 2720000
}
function filterDrops(dropArray) {
  if(dropArray.length > 1) {
    const random = Math.floor(Math.random()*dropArray.length)
    return dropArray[random]
  } else {
    return dropArray[0];
  }
}
function equalArrays(arr1, arr2) {
  let sortArr1 = [...arr1].sort()
  let sortArr2 = [...arr2].sort()
  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i=0; i<sortArr1.length; i++) {
    if(sortArr1[i] !== sortArr2[i]) {
      return false
    }
  }
  return true
}
function rollDrops(drops) {
  let primaryDropArray = []
  let secondaryDropArray = []
    while(primaryDropArray.length == 0) {
    for(let i = 0; i < drops.primary.length; i++) {
      const random = Math.random()
      if(random < drops.primary[i].chance) {
        primaryDropArray.push(`${drops.primary[i].name}`)
      }
      }
    }
    while(secondaryDropArray.length == 0) {
    for(let i = 0; i < drops.secondary.length; i++) {
      const random = Math.random()
      if(random < drops.secondary[i].chance) {
        secondaryDropArray.push(`${drops.secondary[i].name}`)
      }
      }
    }
    let arr1 = []
    let arr2 = []
    let type 
    arr1.push((filterDrops(primaryDropArray)))
    arr2.push((filterDrops(secondaryDropArray)))
    for(let i=0; i<drops.primary.length; i++) {
      if(arr1 == drops.primary[i].name) {
        type = drops.primary[i].price
      }
    }
    firstDropArray = (arr1)
    secondDropArray = (arr2)
    return([firstDropArray.toString(), secondDropArray.toString(), type.toString()])
  }
function priceSearch(arr) {
  for(let i=0; i<drops.secondary.length; i++) {
    if(arr == drops.secondary[i].name) {
      return drops.secondary[i].price
    }
  }
}
function attributeRoller(args) {
    let attributesArray = []
    let tempAttributes = []
    while(attributesArray.length == 0) {
    for(let i = 0; i < attributes.length; i++) {
      const random = Math.random()
      if(random < attributes[i].chance) {
        attributesArray.push(`${attributes[i].name}`)
      }
      }
    } 
    let goodArray = filterDrops(attributesArray)
    firstAttribute = goodArray + " " + firstLevel.toString()
    for(let i=0; i<attributes2.length; i++) {
      if(goodArray == attributes2[i].name) {
        attributes2.splice(i,1)
      }
    }
    while(tempAttributes.length == 0) {
      for(let i=0; i<attributes2.length; i++) {
        const random = Math.random()
        if(random < attributes2[i].chance && attributes2[i].name.toString() !== goodArray[0].toString()) {
          tempAttributes.push(`${attributes2[i].name}`)
        }
      }
    }
    let goodArray2 = filterDrops(tempAttributes)
    secondAttribute = goodArray2 + " " + secondLevel.toString()
    finalAttributes.push(goodArray.toString())
    finalAttributes.push(goodArray2.toString())
    if(args[2].toString().includes("attribute")) {
      return [goodArray.toString(), goodArray2.toString(), args[2]]
    } else {
      return [" ", " ", "stop"]
    }
}
function pricer(arr) {
  let attr1 = arr[0]
  let attr2 = arr[1]
  let type = arr[2]
  let priceMult1 = 1
  let priceMult2 = .5
  let attributeNum1 = 0
  let attributeNum2 = 0
  let firstPrice
  let secondPrice
  let itemPrice
  let grPrice = 0
  if(firstLevel == 6) {
    priceMult = 2
  } 
  if(secondLevel == 5) {
    priceMult2 = 1
  }
  for(let i=0; i<attributes.length; i++) {
    if(attr1 == attributes[i].name) {
      attributeNum1 = i
    }
    if(attr2 == attributes[i].name) {
      attributeNum2 = i
    }
  }
  if(type == "attribute bad") {
    firstPrice = priceMult1*(attributes[attributeNum1].pricehelm)
    secondPrice = priceMult2*(attributes[attributeNum2].pricehelm)
  } else if(type == "attribute") {
    firstPrice = priceMult1*(attributes[attributeNum1].price)
    secondPrice = priceMult2*(attributes[attributeNum2].price)
  } else if(type == "attribute big") {
    firstPrice = priceMult1*(attributes[attributeNum1].priceequip)
    secondPrice = priceMult2*(attributes[attributeNum2].priceequip)
  } else if(type == "attribute meh") {
    firstPrice = priceMult1*(attributes[attributeNum1].priceequip2)
    secondPrice = priceMult2*(attributes[attributeNum2].priceequip2)
  } else if(type == "attribute low") {
    firstPrice = priceMult1*(attributes[attributeNum1].priceequip3)
    secondPrice = priceMult2*(attributes[attributeNum2].priceequip3)
  } else if(type == "stop") {
    firstPrice = 0
    secondPrice = 0
  }
  for(let i=0; i<drops.primary.length; i++) {
    if(firstDropArray == drops.primary[i].name) {
      let price = drops.primary[i].price
      if(typeof(price) === "string") {
        itemPrice = 0
        attributeTrue = true
      } else {
        itemPrice = drops.primary[i].price
      }
    }
  }
  for(let i=0; i<drops.secondary.length; i++) {
    if(secondDropArray == drops.secondary[i].name) {
      price2 = drops.secondary[i].price
    }
  }
  if(firstDropArray[0].includes("Crimson")) {
    for(let i=0; i<godrolls.crimson.length; i++) {
      if(equalArrays(finalAttributes, godrolls.crimson[i].attributes)) {
        if(type == "attribute bad") {
          grPrice = godrolls.crimson[i].pricehelm
        } else {
          grPrice = godrolls.crimson[i].price
        }
    }
  }
  
}
if(firstDropArray[0].includes("Terror")) {
    for(let i=0; i<godrolls.terror.length; i++) {
      if(equalArrays(finalAttributes, godrolls.terror[i].attributes)) {
        if(type == "attribute bad") {
          grPrice = godrolls.terror[i].pricehelm
        } else {
          grPrice = godrolls.terror[i].price
        }
    }
  }
  
}
if(firstDropArray[0].includes("Aurora") && !firstDropArray[0].includes("Staff")) {
    for(let i=0; i<godrolls.aurora.length; i++) {
      if(equalArrays(finalAttributes, godrolls.aurora[i].attributes)) {
        if(type == "attribute bad") {
          grPrice = godrolls.aurora[i].pricehelm
        } else {
          grPrice = godrolls.aurora[i].price
        }
    }
  }
  
}
if(type == "attribute big" && type == "attribute meh" && type == "attribute low") {
    for(let i=0; i<godrolls.molten.length; i++) {
      if(equalArrays(finalAttributes, godrolls.molten[i].attributes)) {
        if(type == "attribute meh") {
          grPrice = godrolls.molten[i].price2
        } else if(type == "attribute low") {
          grPrice = godrolls.molten[i].price3
        } else {
          grPrice = godrolls.molten[i].price
        }
    }
  }
}
price1 = Math.max(firstPrice, secondPrice, itemPrice, grPrice)
totalPrice = price1 + price2 + 4224000 + tabascoMoney
}
pricer(attributeRoller(rollDrops(drops)))
console.log(`You rolled a ${(firstDropArray[0])}! Price: ${price1}\nYou rolled a ${secondDropArray[0]}! Price: ${price2}`)
if(attributeTrue) {
  console.log(`Attributes: ${firstAttribute}, ${secondAttribute}`)
}
console.log(`Total Revenue: ${totalPrice}`)

function average(num) {
  let totalMoney = 0
  for(let i=0; i<num; i++) {
    pricer(attributeRoller(rollDrops(drops)))
    totalMoney = totalMoney + totalPrice
  }
  return totalMoney/num
}
console.log(average(40))