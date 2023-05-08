
let familiars = [
    {
        name: 'Fenrir',
        img: './assets/fenrir-removebg-preview.png',
        isPurchased: false,
        cost: 100,
        value: 1000,
        type: 'dmg',

    },
    {
        name: 'Phoenix',
        img: './assets/Phoenix_2560x1440_-removebg-preview.png',
        isPurchased: false,
        cost: 100,
        value: 1000,
        type: 'dmg',
    },
    {
        name: 'Fallen Angel',
        img: './assets/fallen_angel_by_bravenor88_dfgpclg-removebg-preview.png',
        isPurchased: false,
        cost: 100,
        value: 50,
        type: 'heal',
    },
    {
        name: 'Dark Pegasus',
        img: './assets/49b2ddeabcb17c1365e277ac5dd509f6-removebg-preview.png',
        isPurchased: false,
        cost: 100,
        value: 2,
        type: 'spd',
    }
]

let attackValueMulti = 1
let attackValue = 1
let balance = 0
let swordUpgradeCost = 100
let swordUpgradeLevel = 1
let currencyLevel = 1
let currencyUpgradeCost = 150
let familiarCost = 50
let familiarValue = 10
let familiarValueMulti = 1
let familiarQuantity = 0
let familiarIsPurchased = false
let familiarGPS = 0
let familiarUpgradeCost = 1000
let familiarUpgradeLevel = 1

let familiarUpgradeRate = 2

function attack() {
    balance += attackValue
    drawBalance()
    drawAttackGold()
}

function buySwordUpgrade() {
    if (balance >= swordUpgradeCost) {
        balance -= swordUpgradeCost
        swordUpgradeCost = Math.floor(swordUpgradeCost * 1.8)
        swordUpgradeLevel++
        attackValue = swordUpgradeLevel * attackValueMulti
    }
    drawBalance()
    drawSwordLevel()
    drawSwordUpgradeCost()
    drawAttackGold()
}

function drawBalance() {
    document.getElementById('balance').innerText = balance
}

function drawAttackGold() {
    document.getElementById('attackgold').innerText = attackValue
}

function drawSwordLevel() {
    document.getElementById('swordLvl').innerText = swordUpgradeLevel
}

function drawCurrencyLevel() {
    document.getElementById('currencyLvl').innerText = currencyLevel
}

function drawSwordUpgradeCost() {
    document.getElementById('sUpgradeCost').innerText = Math.floor(swordUpgradeCost)
}

function drawCurrencyUpgrdCost() {
    document.getElementById('cUpgradeCost').innerText = currencyUpgradeCost
}

function upgradeCurrency() {
    if (balance >= currencyUpgradeCost) {
        balance -= currencyUpgradeCost
        attackValueMulti += 0.5
        currencyUpgradeCost = currencyUpgradeCost * 2
        currencyLevel++
        attackValue = swordUpgradeLevel * attackValueMulti
        drawBalance()
        drawCurrencyUpgrdCost()
        drawAttackGold()
        drawCurrencyLevel()
    }
}

function buyFamiliar() {
    if (familiarQuantity < 20){

        if (balance >= familiarCost) {
            balance -= familiarCost
            familiarQuantity++
            familiarIsPurchased = true
            familiarCost += 100
            familiarGPS = (familiarQuantity * familiarValue * familiarValueMulti)/2.5
        }
    }
    drawFamiliarQuantity()
    drawFamiliarCost()
    drawFamiliarGPS()
}

function familiarAttack() {
    balance += familiarValue * familiarValueMulti * familiarQuantity

    drawFamiliarGPS()
}

function upgradeFamiliar() {
    if (balance >= familiarUpgradeCost) {
        balance -= familiarUpgradeCost
        familiarUpgradeLevel++
        familiarUpgradeCost = familiarUpgradeCost * familiarUpgradeRate
        familiarValueMulti = familiarValueMulti * familiarUpgradeRate
    }
    familiarGPS = (familiarQuantity * familiarValue * familiarValueMulti)/2.5
    drawFamiliarUpgradeCost()
    drawFamiliarLevel()
    drawFamiliarGPS()
}

function drawFamiliarQuantity() {
    document.getElementById('familiarquantity').innerText = familiarQuantity
}

function drawFamiliarCost(){
    document.getElementById('familiarcost').innerText = familiarCost
}

function drawFamiliarGPS() {
    document.getElementById('familiargold').innerText = familiarGPS
}

function drawFamiliarUpgradeCost(){
    document.getElementById('familiarupgradecost').innerText = familiarUpgradeCost
}

function drawFamiliarLevel() {
    document.getElementById('familiarupgradelevel').innerText = familiarUpgradeLevel
}

drawFamiliarLevel()
drawFamiliarUpgradeCost()
drawFamiliarGPS()
drawFamiliarCost()
drawFamiliarQuantity()
drawCurrencyLevel()
drawCurrencyUpgrdCost()
drawAttackGold()
drawBalance()
drawSwordLevel()
drawSwordUpgradeCost()

setInterval(() => {
    if (familiarIsPurchased){
        familiarAttack()
    }
    drawBalance()
}
, 2500)