const { mongoose, runWithDatabase } = require('./database');
const manyItems = require('./items');

const magicItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    magicalProperty: {
        type: String,
        required: true
    },
    unitCost: {
        type: Number,
        required: true
    },
    totalUnits: {
        type: Number,
        required: true
    }

})

magicItemSchema.statics.findMostExpensive = function (callback) {
    return this.findOne({}).sort('unitCost').exec(callback);
}

magicItemSchema.methods.use = function (callback) {
    this.totalUnits -= this.unitCost;
    return this.save();
}

const MagicItem = mongoose.model('MagicItem', magicItemSchema);

runWithDatabase(async () => {
    await MagicItem.create(manyItems);

    const mostExpensive = await MagicItem.findMostExpensive();
    console.log(`The most expensive object is the ${mostExpensive.item}`);
    console.log(`The ${mostExpensive.item} started with ${mostExpensive.totalUnits} charges.`);
    console.log(`Using ${mostExpensive.item}...`)
    await mostExpensive.use();
    console.log(`The ${mostExpensive.item} has ${mostExpensive.totalUnits} charges left.`);

    let finder = await MagicItem.findOne({ item: 'cloak' });
    console.log(`Found one: ${finder.item}`);

    let cheapObjects = await MagicItem.find({ unitCost: { $lt: 50 } })
    console.log(`Found ${MagicItem.length} magic objects`);

});


