const sum=require("./sum");

test('adds 1+2=3',()=>{
    except(sum(1,2)).toBe(3);
})

