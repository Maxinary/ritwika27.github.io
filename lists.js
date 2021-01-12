// These are generated from the build_latinsquare_trials.py
// on May 21, based on LatinSquared - Longform - May21.csv

// If this were developed in-combination with the website, it could be made
// much more space efficient.

imgSourceDirectory = "FinalImagesALL/"
audioSourceDirectory = "WAVFiles/ExperimentFiles/"

// These are functions so they are not instantiated unless they are called.
// This conserves memory
let lists = [[new QuadPage("CJ were throwing the baseball", "CJ_P_TB.wav",
    [
    new Choice("T", "Boy2_3_Baseball.jpg"),
    new Choice("C1", "Girl1_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CJ were hanging the clothes", "CJ_P_HC.wav",
    [
    new Choice("T", "Boy2_3_Clothes.jpg"),
    new Choice("C1", "Girl1_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CJ were blowing the bubbles", "CJ_P_BB.wav",
    [
    new Choice("T", "Boy2_3_Bubbles.jpg"),
    new Choice("C1", "Girl1_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CJ were sweeping the floor", "CJ_P_SF.wav",
    [
    new Choice("T", "Boy2_3_Floor.jpg"),
    new Choice("C1", "Girl1_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CJ were fixing the bike", "CJ_P_FB.wav",
    [
    new Choice("T", "Boy2_3_Bike.png"),
    new Choice("C1", "Girl1_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CJ were pushing the cart", "CJ_P_PC.wav",
    [
    new Choice("T", "Boy2_3_Cart.png"),
    new Choice("C1", "Girl1_Cart.png"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CJ were brushing the cat", "CJ_P_BCat.wav",
    [
    new Choice("T", "Boy2_3_Cat.png"),
    new Choice("C1", "Girl1_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("J was feeding the rabbit", "J_S_FR.wav",
    [
    new Choice("T", "Boy1_Rabbit.png"),
    new Choice("C1", "Girl1_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy2_3_Rabbit.png")
    ])
,
new QuadPage("J was touching the frog", "J_S_TF.wav",
    [
    new Choice("T", "Boy1_Frog.jpg"),
    new Choice("C1", "Girl1_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy2_3_Frog.jpg")
    ])
,
new QuadPage("J was holding the basket", "J_S_HB.wav",
    [
    new Choice("T", "Boy1_Basket.jpg"),
    new Choice("C1", "Girl1_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy2_3_Basket.jpg")
    ])
,
new QuadPage("J was building the sandcastle", "J_S_BSC.wav",
    [
    new Choice("T", "Boy1_Sandcastle.jpg"),
    new Choice("C1", "Girl1_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy2_3_Sandcastle.jpg")
    ])
,
new QuadPage("J was painting the wall", "J_S_PWall.wav",
    [
    new Choice("T", "Boy1_Wall.jpg"),
    new Choice("C1", "Girl1_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy2_3_Wall.jpg")
    ])
,
new QuadPage("J was jumping the fence", "J_S_JF.wav",
    [
    new Choice("T", "Boy1_Fence.jpg"),
    new Choice("C1", "Girl1_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy2_3_Fence.jpg")
    ])
,
new QuadPage("J was moving the box", "J_S_MB.wav",
    [
    new Choice("T", "Boy1_Box.jpg"),
    new Choice("C1", "Girl1_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy2_3_Box.jpg")
    ])
,
new QuadPage("CM were drinking the milkshake", "CM_P_DMS.wav",
    [
    new Choice("T", "Girl2_3_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Boy2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CM were hugging the teddy bear", "CM_P_HTB.wav",
    [
    new Choice("T", "Girl2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Boy2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CM were picking the apples", "CM_P_PA.wav",
    [
    new Choice("T", "Girl2_3_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Boy2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CM were planting the flowers", "CM_P_PF.wav",
    [
    new Choice("T", "Girl2_3_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Boy2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CM were eating a pizza", "CM_P_EP.wav",
    [
    new Choice("T", "Girl2_3_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Boy2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CM were baking a cake", "CM_P_BC.wav",
    [
    new Choice("T", "Girl2_3_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Boy2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CM were walkng a dog", "CM_P_WD.wav",
    [
    new Choice("T", "Girl2_3_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Boy2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("CM was washing a car", "CM_S_WC.wav",
    [
    new Choice("T", "Girl1_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CM was reading a book", "CM_S_RBook.wav",
    [
    new Choice("T", "Girl1_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CM was kicking a ball", "CM_S_KB.wav",
    [
    new Choice("T", "Girl1_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CM was riding a horse", "CM_S_RH.wav",
    [
    new Choice("T", "Girl1_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CM was pulling a wagon", "CM_S_PW.wav",
    [
    new Choice("T", "Girl1_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CM was folding a blanket", "CM_S_FBlanket.wav",
    [
    new Choice("T", "Girl1_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CM was climbing a tree", "CM_S_CTree.wav",
    [
    new Choice("T", "Girl1_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
],[new QuadPage("J was throwing the baseball", "J_S_TB.wav",
    [
    new Choice("T", "Boy1_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Girl1_Baseball.jpg")
    ])
,
new QuadPage("J was hanging the clothes", "J_S_HC.wav",
    [
    new Choice("T", "Boy1_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Girl1_Clothes.jpg")
    ])
,
new QuadPage("J was blowing the bubbles", "J_S_BB.wav",
    [
    new Choice("T", "Boy1_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Girl1_Bubbles.jpg")
    ])
,
new QuadPage("J was sweeping the floor", "J_S_SF.wav",
    [
    new Choice("T", "Boy1_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Girl1_Floor.jpg")
    ])
,
new QuadPage("J was fixing the bike", "J_S_FB.wav",
    [
    new Choice("T", "Boy1_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Girl1_Bike.png")
    ])
,
new QuadPage("J was pushing the cart", "J_S_PC.wav",
    [
    new Choice("T", "Boy1_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Girl1_Cart.png")
    ])
,
new QuadPage("J was brushing the cat", "J_S_BCat.wav",
    [
    new Choice("T", "Boy1_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Girl1_Cat.png")
    ])
,
new QuadPage("CM were feeding the rabbit", "CM_P_FR.wav",
    [
    new Choice("T", "Girl2_3_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl1_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CM were touching the frog", "CM_P_TF.wav",
    [
    new Choice("T", "Girl2_3_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl1_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CM were holding the basket", "CM_P_HB.wav",
    [
    new Choice("T", "Girl2_3_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl1_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("CM were building the sandcastle", "CM_P_BSC.wav",
    [
    new Choice("T", "Girl2_3_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl1_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CM were painting the wall", "CM_P_PWall.wav",
    [
    new Choice("T", "Girl2_3_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl1_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CM were jumping the fence", "CM_P_JF.wav",
    [
    new Choice("T", "Girl2_3_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl1_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CM were moving the box", "CM_P_MB.wav",
    [
    new Choice("T", "Girl2_3_Box.jpg"),
    new Choice("C1", "Boy2_3_Box.jpg"),
    new Choice("C2", "Girl1_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("CM was drinking the milkshake", "CM_S_DMS.wav",
    [
    new Choice("T", "Girl1_Milkshake.jpg"),
    new Choice("C1", "Boy2_3_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CM was hugging the teddy bear", "CM_S_HTB.wav",
    [
    new Choice("T", "Girl1_Bear.jpg"),
    new Choice("C1", "Boy2_3_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CM was picking the apples", "CM_S_PA.wav",
    [
    new Choice("T", "Girl1_Apples.jpg"),
    new Choice("C1", "Boy2_3_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CM was planting the flowers", "CM_S_PF.wav",
    [
    new Choice("T", "Girl1_Flowers.jpg"),
    new Choice("C1", "Boy2_3_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CM was eating a pizza", "CM_S_EP.wav",
    [
    new Choice("T", "Girl1_Pizza.jpg"),
    new Choice("C1", "Boy2_3_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CM was baking a cake", "CM_S_BC.wav",
    [
    new Choice("T", "Girl1_Cake.jpg"),
    new Choice("C1", "Boy2_3_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CM was walkng a dog", "CM_S_WD.wav",
    [
    new Choice("T", "Girl1_Dog.jpg"),
    new Choice("C1", "Boy2_3_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("CJ were washing a car", "CJ_P_WC.wav",
    [
    new Choice("T", "Boy2_3_Car.jpg"),
    new Choice("C1", "Girl1_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CJ were reading a book", "CJ_P_RBook.wav",
    [
    new Choice("T", "Boy2_3_Book.jpg"),
    new Choice("C1", "Girl1_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CJ were kicking a ball", "CJ_P_KB.wav",
    [
    new Choice("T", "Boy2_3_Ball.jpg"),
    new Choice("C1", "Girl1_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CJ were riding a horse", "CJ_P_RH.wav",
    [
    new Choice("T", "Boy2_3_Horse.jpg"),
    new Choice("C1", "Girl1_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CJ were pulling a wagon", "CJ_P_PW.wav",
    [
    new Choice("T", "Boy2_3_Wagon.jpg"),
    new Choice("C1", "Girl1_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CJ were folding a blanket", "CJ_P_FBlanket.wav",
    [
    new Choice("T", "Boy2_3_Blanket.jpg"),
    new Choice("C1", "Girl1_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CJ were climbing a tree", "CJ_P_CTree.wav",
    [
    new Choice("T", "Boy2_3_Tree.jpg"),
    new Choice("C1", "Girl1_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
],[new QuadPage("CM were throwing the baseball", "CM_P_TB.wav",
    [
    new Choice("T", "Girl2_3_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl1_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CM were hanging the clothes", "CM_P_HC.wav",
    [
    new Choice("T", "Girl2_3_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl1_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CM were blowing the bubbles", "CM_P_BB.wav",
    [
    new Choice("T", "Girl2_3_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl1_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CM was sweeping the floor", "CM_P_SF.wav",
    [
    new Choice("T", "Girl2_3_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl1_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CM were fixing the bike", "CM_P_FB.wav",
    [
    new Choice("T", "Girl2_3_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl1_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CM were pushing the cart", "CM_P_PC.wav",
    [
    new Choice("T", "Girl2_3_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl1_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CM were brushing the cat", "CM_P_BCat.wav",
    [
    new Choice("T", "Girl2_3_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl1_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("CM was feeding the rabbit", "CM_S_FR.wav",
    [
    new Choice("T", "Girl1_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CM was touching the frog", "CM_S_TF.wav",
    [
    new Choice("T", "Girl1_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CM was holding the basket", "CM_S_HB.wav",
    [
    new Choice("T", "Girl1_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("CM was building the sandcastle", "CM_S_BSC.wav",
    [
    new Choice("T", "Girl1_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CM was painting the wall", "CM_S_PWall.wav",
    [
    new Choice("T", "Girl1_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CM was jumping the fence", "CM_S_JF.wav",
    [
    new Choice("T", "Girl1_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CM was moving the box", "CM_S_MB.wav",
    [
    new Choice("T", "Girl1_Box.jpg"),
    new Choice("C1", "Boy2_3_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("CJ were drinking the milkshake", "CJ_P_DMS.wav",
    [
    new Choice("T", "Boy2_3_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CJ were hugging the teddy bear", "CJ_P_HTB.wav",
    [
    new Choice("T", "Boy2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CJ were picking the apples", "CJ_P_PA.wav",
    [
    new Choice("T", "Boy2_3_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CJ were planting the flowers", "CJ_P_PF.wav",
    [
    new Choice("T", "Boy2_3_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CJ were eating a pizza", "CJ_P_EP.wav",
    [
    new Choice("T", "Boy2_3_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CJ were baking a cake", "CJ_P_BC.wav",
    [
    new Choice("T", "Boy2_3_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CJ were walkng a dog", "CJ_P_WD.wav",
    [
    new Choice("T", "Boy2_3_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("J was washing a car", "J_S_WC.wav",
    [
    new Choice("T", "Boy1_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Girl1_Car.png")
    ])
,
new QuadPage("J was reading a book", "J_S_RBook.wav",
    [
    new Choice("T", "Boy1_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Girl1_Book.jpg")
    ])
,
new QuadPage("J was kicking a ball", "J_S_KB.wav",
    [
    new Choice("T", "Boy1_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Girl1_Ball.jpg")
    ])
,
new QuadPage("J was riding a horse", "J_S_RH.wav",
    [
    new Choice("T", "Boy1_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Girl1_Horse.jpg")
    ])
,
new QuadPage("J was pulling a wagon", "J_S_PW.wav",
    [
    new Choice("T", "Boy1_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Girl1_Wagon.jpg")
    ])
,
new QuadPage("J was folding a blanket", "J_S_FBlanket.wav",
    [
    new Choice("T", "Boy1_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Girl1_Blanket.jpg")
    ])
,
new QuadPage("J was climbing a tree", "J_S_CTree.wav",
    [
    new Choice("T", "Boy1_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Girl1_Tree.jpg")
    ])
],[new QuadPage("CM was throwing the baseball", "CM_S_TB.wav",
    [
    new Choice("T", "Girl1_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CM was hanging the clothes", "CM_S_HC.wav",
    [
    new Choice("T", "Girl1_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CM was blowing the bubbles", "CM_S_BB.wav",
    [
    new Choice("T", "Girl1_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CM was sweeping the floor", "CM_S_SF.wav",
    [
    new Choice("T", "Girl1_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CM was fixing the bike", "CM_S_FB.wav",
    [
    new Choice("T", "Girl1_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CM was pushing the cart", "CM_S_PC.wav",
    [
    new Choice("T", "Girl1_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.jpg"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CM was brushing the cat", "CM_S_BCat.wav",
    [
    new Choice("T", "Girl1_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("CJ were feeding the rabbit", "CJ_P_FR.wav",
    [
    new Choice("T", "Boy2_3_Rabbit.png"),
    new Choice("C1", "Girl1_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CJ were touching the frog", "CJ_P_TF.wav",
    [
    new Choice("T", "Boy2_3_Frog.jpg"),
    new Choice("C1", "Girl1_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CJ were holding the basket", "CJ_P_HB.wav",
    [
    new Choice("T", "Boy2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CJ were building the sandcastle", "CJ_P_BSC.wav",
    [
    new Choice("T", "Boy2_3_Sandcastle.jpg"),
    new Choice("C1", "Girl1_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CJ were painting the wall", "CJ_P_PWall.wav",
    [
    new Choice("T", "Boy2_3_Wall.jpg"),
    new Choice("C1", "Girl1_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CJ were jumping the fence", "CJ_P_JF.wav",
    [
    new Choice("T", "Boy2_3_Fence.jpg"),
    new Choice("C1", "Girl1_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CJ were moving the box", "CJ_P_MB.wav",
    [
    new Choice("T", "Boy2_3_Box.jpg"),
    new Choice("C1", "Girl1_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("J was drinking the milkshake", "J_S_DMS.wav",
    [
    new Choice("T", "Boy1_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy2_3_Milkshake.jpg")
    ])
,
new QuadPage("J was hugging the teddy bear", "J_S_HTB.wav",
    [
    new Choice("T", "Boy1_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy2_3_Bear.jpg")
    ])
,
new QuadPage("J was picking the apples", "J_S_PA.wav",
    [
    new Choice("T", "Boy1_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy2_3_Apples.jpg")
    ])
,
new QuadPage("J was planting the flowers", "J_S_PF.wav",
    [
    new Choice("T", "Boy1_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy2_3_Flowers.jpg")
    ])
,
new QuadPage("J was eating a pizza", "J_S_EP.wav",
    [
    new Choice("T", "Boy1_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy2_3_Pizza.jpg")
    ])
,
new QuadPage("J was baking a cake", "J_S_BC.wav",
    [
    new Choice("T", "Boy1_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy2_3_Cake.jpg")
    ])
,
new QuadPage("J was walkng a dog", "J_S_WD.wav",
    [
    new Choice("T", "Boy1_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy2_3_Dog.jpg")
    ])
,
new QuadPage("CM were washing a car", "CM_P_WC.wav",
    [
    new Choice("T", "Girl2_3_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl1_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CM were reading a book", "CM_P_RBook.wav",
    [
    new Choice("T", "Girl2_3_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl1_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CM were kicking a ball", "CM_P_KB.wav",
    [
    new Choice("T", "Girl2_3_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl1_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CM were riding a horse", "CM_P_RH.wav",
    [
    new Choice("T", "Girl2_3_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl1_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CM were pulling a wagon", "CM_P_PW.wav",
    [
    new Choice("T", "Girl2_3_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl1_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CM were folding a blanket", "CM_P_FBlanket.wav",
    [
    new Choice("T", "Girl2_3_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl1_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CM were climbing a tree", "CM_P_CTree.wav",
    [
    new Choice("T", "Girl2_3_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl1_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
]];

let AAL_Prefix = "WAVFiles/DialectSurveyAudioFinal/AAL/";

let AAL = ["ATL_se0_ag1_f.m4a",
  "ATL_se0_ag2_m_01_1_1486.8-1488.5_aint-for-didnt.mp3",
  "DCA_se3_ag2_f_01_1.mp3",
  "DCB_int_01_2241.m4a",
  "DCB_se1_ag1_m_03_1_ZS_be.mp3",
  "DCB_se3_ag3_m_02_1.mp3",
  "ROC_se0_ag1_m2910.mp3",
  "ROC_se0_ag1_m44.mp3",
  "mem0400m_1466.8-1470.3_phrase-final-lengthening.mp3"];

let MAE_Prefix = "WAVFiles/DialectSurveyAudioFinal/MAE/";
let MAE = ["acho3.mp3",
  "burton1.mp3",
  "burton2.mp3",
  "burton3.mp3",
  "burton4_dax.mp3",
  "dax_david1.mp3",
  "hiddenbrain2.mp3",
  "susandavid1.mp3",
  "wilkerson3pt.mp3"];

let MLE_Prefix = "WAVFiles/DialectSurveyAudioFinal/MLE/";
let MLE = ["ELR_TU07_he_werent.wav",
  "ELR_TU07_this_me_short.wav",
  "ELR_TU11_audio_nuffin.wav",
  "London1_innit.m4a",
  "js2.m4a",
  "novelist2.m4a",
  "novelist4.m4a",
  "ruben1.m4a",
  "stormzy2.m4a"];


let _global_audio_object = {'file': 'AUDIO_SHEET.mp3', 'locations': {'WAVFiles/Reinforcement/Slide8_IncorrectFeedback.mp3': {'start': 0, 'length': 13.871}, 'WAVFiles/Reinforcement/LandingPage1.wav': {'start': 14.371, 'length': 6.148}, 'WAVFiles/Reinforcement/LandingPage3.wav': {'start': 21.019, 'length': 6.884}, 'WAVFiles/Reinforcement/LandingPage2.wav': {'start': 28.403, 'length': 6.676}, 'WAVFiles/Reinforcement/LandingPage6.wav': {'start': 35.579, 'length': 8.722}, 'WAVFiles/Reinforcement/LandingPage7.wav': {'start': 44.801, 'length': 9.688}, 'WAVFiles/Reinforcement/LandingPage5.wav': {'start': 54.989, 'length': 7.843}, 'WAVFiles/Reinforcement/LandingPage4.wav': {'start': 63.332, 'length': 6.948}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.mp3': {'start': 70.78, 'length': 6.713}, 'WAVFiles/Reinforcement/Slide6_IncorrectFeedback.mp3': {'start': 77.993, 'length': 13.871}, 'WAVFiles/Reinforcement/Slide12_LandingPage1.wav': {'start': 92.364, 'length': 6.611}, 'WAVFiles/Reinforcement/Slide9_IncorrectFeedback.mp3': {'start': 99.475, 'length': 13.871}, 'WAVFiles/Reinforcement/Slide10_IncorrectFeedback.mp3': {'start': 113.846, 'length': 14.916}, 'WAVFiles/Reinforcement/Slide7_IncorrectFeedback.mp3': {'start': 129.262, 'length': 13.871}, 'WAVFiles/Introduction_Instructions/slide11_LetsBegin.wav': {'start': 143.633, 'length': 18.039}, 'WAVFiles/Introduction_Instructions/Slide6_CMtable.wav': {'start': 162.172, 'length': 4.283}, 'WAVFiles/Introduction_Instructions/Slide7_IntrotoEX.wav': {'start': 166.955, 'length': 28.972}, 'WAVFiles/Introduction_Instructions/Slide4_WearHeadphones.wav': {'start': 196.427, 'length': 6.744}, 'WAVFiles/Introduction_Instructions/Slide6_CJ.wav': {'start': 203.671, 'length': 3.975}, 'WAVFiles/Introduction_Instructions/Slide5_StoryIntro.wav': {'start': 208.146, 'length': 40.463}, 'WAVFiles/Introduction_Instructions/Slide6_Jeremiah.wav': {'start': 249.109, 'length': 3.941}, 'WAVFiles/Introduction_Instructions/Slide3CGInstructions.wav': {'start': 253.55, 'length': 47.8}, 'WAVFiles/Introduction_Instructions/Slide6_IntroToNames.wav': {'start': 301.85, 'length': 45.753}, 'WAVFiles/Introduction_Instructions/Slide6_CMmovie.wav': {'start': 348.103, 'length': 4.019}, 'WAVFiles/DialectSurveyAudioFinal/AAL/ATL_se0_ag1_f.m4a': {'start': 352.622, 'length': 11.308}, 'WAVFiles/DialectSurveyAudioFinal/AAL/DCB_int_01_2241.m4a': {'start': 364.43, 'length': 9.3}, 'WAVFiles/DialectSurveyAudioFinal/AAL/DCB_se3_ag3_m_02_1.mp3': {'start': 374.23, 'length': 2.116}, 'WAVFiles/DialectSurveyAudioFinal/AAL/DCA_se3_ag2_f_01_1.mp3': {'start': 376.846, 'length': 8.359}, 'WAVFiles/DialectSurveyAudioFinal/AAL/mem0400m_1466.8-1470.3_phrase-final-lengthening.mp3': {'start': 385.705, 'length': 3.448}, 'WAVFiles/DialectSurveyAudioFinal/AAL/ATL_se0_ag2_m_01_1_1486.8-1488.5_aint-for-didnt.mp3': {'start': 389.653, 'length': 1.724}, 'WAVFiles/DialectSurveyAudioFinal/AAL/ROC_se0_ag1_m44.mp3': {'start': 391.877, 'length': 3.448}, 'WAVFiles/DialectSurveyAudioFinal/AAL/DCB_se1_ag1_m_03_1_ZS_be.mp3': {'start': 395.825, 'length': 5.407}, 'WAVFiles/DialectSurveyAudioFinal/AAL/ROC_se0_ag1_m2910.mp3': {'start': 401.732, 'length': 4.807}, 'WAVFiles/DialectSurveyAudioFinal/MAE/wilkerson3pt.mp3': {'start': 407.039, 'length': 7.288}, 'WAVFiles/DialectSurveyAudioFinal/MAE/acho3.mp3': {'start': 414.827, 'length': 4.493}, 'WAVFiles/DialectSurveyAudioFinal/MAE/burton4_dax.mp3': {'start': 419.82, 'length': 3.291}, 'WAVFiles/DialectSurveyAudioFinal/MAE/dax_david1.mp3': {'start': 423.611, 'length': 3.344}, 'WAVFiles/DialectSurveyAudioFinal/MAE/hiddenbrain2.mp3': {'start': 427.455, 'length': 3.396}, 'WAVFiles/DialectSurveyAudioFinal/MAE/burton1.mp3': {'start': 431.351, 'length': 4.885}, 'WAVFiles/DialectSurveyAudioFinal/MAE/susandavid1.mp3': {'start': 436.736, 'length': 8.908}, 'WAVFiles/DialectSurveyAudioFinal/MAE/burton2.mp3': {'start': 446.144, 'length': 3.866}, 'WAVFiles/DialectSurveyAudioFinal/MAE/burton3.mp3': {'start': 450.51, 'length': 13.035}, 'WAVFiles/DialectSurveyAudioFinal/MLE/ELR_TU11_audio_nuffin.wav': {'start': 464.045, 'length': 4.84}, 'WAVFiles/DialectSurveyAudioFinal/MLE/novelist4.m4a': {'start': 469.385, 'length': 4.69}, 'WAVFiles/DialectSurveyAudioFinal/MLE/ruben1.m4a': {'start': 474.575, 'length': 15.07}, 'WAVFiles/DialectSurveyAudioFinal/MLE/novelist2.m4a': {'start': 490.145, 'length': 8.684}, 'WAVFiles/DialectSurveyAudioFinal/MLE/stormzy2.m4a': {'start': 499.329, 'length': 4.551}, 'WAVFiles/DialectSurveyAudioFinal/MLE/js2.m4a': {'start': 504.38, 'length': 4.04}, 'WAVFiles/DialectSurveyAudioFinal/MLE/ELR_TU07_this_me_short.wav': {'start': 508.92, 'length': 7.686}, 'WAVFiles/DialectSurveyAudioFinal/MLE/London1_innit.m4a': {'start': 517.106, 'length': 4.087}, 'WAVFiles/DialectSurveyAudioFinal/MLE/ELR_TU07_he_werent.wav': {'start': 521.693, 'length': 2.977}, 'WAVFiles/Examples/Slide9_CM_S_Movie.wav': {'start': 525.17, 'length': 3.226}, 'WAVFiles/Examples/Slide8_CM_S_Table.wav': {'start': 528.896, 'length': 4.151}, 'WAVFiles/Examples/slide10_CM_P_Paper.wav': {'start': 533.547, 'length': 4.063}, 'WAVFiles/ExperimentFiles/J_S_CT.wav': {'start': 538.11, 'length': 2.126}, 'WAVFiles/ExperimentFiles/CJ_P_WM.wav': {'start': 540.736, 'length': 2.094}, 'WAVFiles/ExperimentFiles/JR_P_WC.wav': {'start': 543.33, 'length': 2.0}, 'WAVFiles/ExperimentFiles/JR_S_SF.wav': {'start': 545.83, 'length': 2.008}, 'WAVFiles/ExperimentFiles/JR_P_BB.wav': {'start': 548.338, 'length': 2.233}, 'WAVFiles/ExperimentFiles/JR_P_BC.wav': {'start': 551.071, 'length': 1.987}, 'WAVFiles/ExperimentFiles/JR_P_HTB.wav': {'start': 553.558, 'length': 2.091}, 'WAVFiles/ExperimentFiles/CM_S_WD.wav': {'start': 556.149, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_PWall.wav': {'start': 558.678, 'length': 2.089}, 'WAVFiles/ExperimentFiles/CJ_P_MB.wav': {'start': 561.267, 'length': 2.213}, 'WAVFiles/ExperimentFiles/CJ_P_RBook.wav': {'start': 563.98, 'length': 1.928}, 'WAVFiles/ExperimentFiles/CM_S_CT.wav': {'start': 566.408, 'length': 2.038}, 'WAVFiles/ExperimentFiles/CJ_P_TB.wav': {'start': 568.946, 'length': 2.422}, 'WAVFiles/ExperimentFiles/JR_S_FBlanket.wav': {'start': 571.868, 'length': 2.075}, 'WAVFiles/ExperimentFiles/CM_P_FB.wav': {'start': 574.443, 'length': 1.931}, 'WAVFiles/ExperimentFiles/CM_S_BSC.wav': {'start': 576.874, 'length': 2.412}, 'WAVFiles/ExperimentFiles/JR_S_FR.wav': {'start': 579.786, 'length': 2.2}, 'WAVFiles/ExperimentFiles/JR_S_JF.wav': {'start': 582.486, 'length': 2.029}, 'WAVFiles/ExperimentFiles/JR_S_KB.wav': {'start': 585.015, 'length': 1.957}, 'WAVFiles/ExperimentFiles/J_S_WD.wav': {'start': 587.472, 'length': 2.118}, 'WAVFiles/ExperimentFiles/CM_P_SF.wav': {'start': 590.09, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CM_S_BB.wav': {'start': 592.517, 'length': 2.204}, 'WAVFiles/ExperimentFiles/CM_S_WC.wav': {'start': 595.221, 'length': 1.974}, 'WAVFiles/ExperimentFiles/J_S_DMS.wav': {'start': 597.695, 'length': 2.3}, 'WAVFiles/ExperimentFiles/JR_P_CTree.wav': {'start': 600.495, 'length': 1.894}, 'WAVFiles/ExperimentFiles/CM_P_PWall.wav': {'start': 602.889, 'length': 1.981}, 'WAVFiles/ExperimentFiles/JR_P_WD.wav': {'start': 605.37, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CM_P_FBlanket.wav': {'start': 608.052, 'length': 1.897}, 'WAVFiles/ExperimentFiles/CM_S_RBook.wav': {'start': 610.449, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CJ_P_TF.wav': {'start': 612.876, 'length': 2.085}, 'WAVFiles/ExperimentFiles/CJ_P_BSC.wav': {'start': 615.461, 'length': 2.478}, 'WAVFiles/ExperimentFiles/CM_S_BC.wav': {'start': 618.439, 'length': 1.996}, 'WAVFiles/ExperimentFiles/J_S_BB.wav': {'start': 620.935, 'length': 2.292}, 'WAVFiles/ExperimentFiles/J_S_WC.wav': {'start': 623.727, 'length': 2.062}, 'WAVFiles/ExperimentFiles/JR_S_FB.wav': {'start': 626.289, 'length': 2.131}, 'WAVFiles/ExperimentFiles/JR_P_CT.wav': {'start': 628.92, 'length': 2.071}, 'WAVFiles/ExperimentFiles/J_S_FBlanket.wav': {'start': 631.491, 'length': 2.116}, 'WAVFiles/ExperimentFiles/CM_P_DMS.wav': {'start': 634.107, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_P_FR.wav': {'start': 636.793, 'length': 1.887}, 'WAVFiles/ExperimentFiles/CM_P_KB.wav': {'start': 639.18, 'length': 1.747}, 'WAVFiles/ExperimentFiles/CM_P_JF.wav': {'start': 641.427, 'length': 2.137}, 'WAVFiles/ExperimentFiles/J_S_BC.wav': {'start': 644.064, 'length': 2.084}, 'WAVFiles/ExperimentFiles/CJ_P_FBlanket.wav': {'start': 646.648, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_P_BSC.wav': {'start': 649.153, 'length': 2.384}, 'WAVFiles/ExperimentFiles/CJ_P_SF.wav': {'start': 652.037, 'length': 2.021}, 'WAVFiles/ExperimentFiles/J_S_PA.wav': {'start': 654.558, 'length': 2.247}, 'WAVFiles/ExperimentFiles/JR_S_WM.wav': {'start': 657.305, 'length': 2.127}, 'WAVFiles/ExperimentFiles/JR_P_HB.wav': {'start': 659.932, 'length': 2.095}, 'WAVFiles/ExperimentFiles/JR_P_BCat.wav': {'start': 662.527, 'length': 2.012}, 'WAVFiles/ExperimentFiles/JR_P_HC.wav': {'start': 665.039, 'length': 2.098}, 'WAVFiles/ExperimentFiles/JR_S_MB.wav': {'start': 667.637, 'length': 2.13}, 'WAVFiles/ExperimentFiles/CM_S_BCat.wav': {'start': 670.267, 'length': 1.983}, 'WAVFiles/ExperimentFiles/J_S_PW.wav': {'start': 672.75, 'length': 2.162}, 'WAVFiles/ExperimentFiles/J_S_RH.wav': {'start': 675.412, 'length': 2.167}, 'WAVFiles/ExperimentFiles/CM_S_PC.wav': {'start': 678.079, 'length': 2.012}, 'WAVFiles/ExperimentFiles/CM_P_TF.wav': {'start': 680.591, 'length': 1.991}, 'WAVFiles/ExperimentFiles/CM_S_PA.wav': {'start': 683.082, 'length': 2.157}, 'WAVFiles/ExperimentFiles/CM_S_CTree.wav': {'start': 685.739, 'length': 1.917}, 'WAVFiles/ExperimentFiles/CJ_P_DMS.wav': {'start': 688.156, 'length': 2.354}, 'WAVFiles/ExperimentFiles/JR_S_TB.wav': {'start': 691.01, 'length': 2.37}, 'WAVFiles/ExperimentFiles/JR_P_EP.wav': {'start': 693.88, 'length': 2.067}, 'WAVFiles/ExperimentFiles/JR_S_PWall.wav': {'start': 696.447, 'length': 2.048}, 'WAVFiles/ExperimentFiles/JR_P_PF.wav': {'start': 698.995, 'length': 2.324}, 'WAVFiles/ExperimentFiles/J_S_PC.wav': {'start': 701.819, 'length': 2.101}, 'WAVFiles/ExperimentFiles/CM_S_RH.wav': {'start': 704.42, 'length': 2.078}, 'WAVFiles/ExperimentFiles/J_S_BSC.wav': {'start': 706.998, 'length': 2.5}, 'WAVFiles/ExperimentFiles/CM_S_PW.wav': {'start': 709.998, 'length': 2.073}, 'WAVFiles/ExperimentFiles/CJ_P_FR.wav': {'start': 712.571, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CJ_P_KB.wav': {'start': 715.052, 'length': 1.842}, 'WAVFiles/ExperimentFiles/CJ_P_JF.wav': {'start': 717.394, 'length': 2.232}, 'WAVFiles/ExperimentFiles/JR_S_HTB.wav': {'start': 720.126, 'length': 2.184}, 'WAVFiles/ExperimentFiles/JR_P_RBook.wav': {'start': 722.81, 'length': 1.881}, 'WAVFiles/ExperimentFiles/CM_S_HB.wav': {'start': 725.191, 'length': 2.054}, 'WAVFiles/ExperimentFiles/CM_P_WM.wav': {'start': 727.745, 'length': 2.0}, 'WAVFiles/ExperimentFiles/CJ_P_CTree.wav': {'start': 730.245, 'length': 1.941}, 'WAVFiles/ExperimentFiles/JR_S_TF.wav': {'start': 732.686, 'length': 1.973}, 'WAVFiles/ExperimentFiles/JR_P_PC.wav': {'start': 735.159, 'length': 1.818}, 'WAVFiles/ExperimentFiles/CM_S_DMS.wav': {'start': 737.477, 'length': 2.212}, 'WAVFiles/ExperimentFiles/J_S_PF.wav': {'start': 740.189, 'length': 2.352}, 'WAVFiles/ExperimentFiles/CM_P_MB.wav': {'start': 743.041, 'length': 2.119}, 'WAVFiles/ExperimentFiles/J_S_EP.wav': {'start': 745.66, 'length': 2.163}, 'WAVFiles/ExperimentFiles/CM_S_HC.wav': {'start': 748.323, 'length': 2.14}, 'WAVFiles/ExperimentFiles/CM_P_TB.wav': {'start': 750.963, 'length': 2.327}, 'WAVFiles/ExperimentFiles/CJ_P_FB.wav': {'start': 753.79, 'length': 2.025}, 'WAVFiles/ExperimentFiles/J_S_HB.wav': {'start': 756.315, 'length': 2.143}, 'WAVFiles/ExperimentFiles/JR_P_PA.wav': {'start': 758.958, 'length': 2.202}, 'WAVFiles/ExperimentFiles/JR_P_PW.wav': {'start': 761.66, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_RH.wav': {'start': 764.345, 'length': 2.076}, 'WAVFiles/ExperimentFiles/CM_S_PF.wav': {'start': 766.921, 'length': 2.263}, 'WAVFiles/ExperimentFiles/CM_S_EP.wav': {'start': 769.684, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_HC.wav': {'start': 772.259, 'length': 2.229}, 'WAVFiles/ExperimentFiles/CJ_P_BCat.wav': {'start': 774.988, 'length': 2.058}, 'WAVFiles/ExperimentFiles/J_S_FR.wav': {'start': 777.546, 'length': 2.241}, 'WAVFiles/ExperimentFiles/J_S_KB.wav': {'start': 780.287, 'length': 1.998}, 'WAVFiles/ExperimentFiles/J_S_JF.wav': {'start': 782.785, 'length': 2.07}, 'WAVFiles/ExperimentFiles/CJ_P_PC.wav': {'start': 785.355, 'length': 1.865}, 'WAVFiles/ExperimentFiles/CM_P_BC.wav': {'start': 787.72, 'length': 1.94}, 'WAVFiles/ExperimentFiles/JR_S_WD.wav': {'start': 790.16, 'length': 2.077}, 'WAVFiles/ExperimentFiles/CM_P_BB.wav': {'start': 792.737, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_S_SF.wav': {'start': 795.423, 'length': 1.96}, 'WAVFiles/ExperimentFiles/CM_P_WC.wav': {'start': 797.883, 'length': 1.952}, 'WAVFiles/ExperimentFiles/CM_S_JF.wav': {'start': 800.335, 'length': 1.982}, 'WAVFiles/ExperimentFiles/CM_S_KB.wav': {'start': 802.817, 'length': 1.905}, 'WAVFiles/ExperimentFiles/CM_S_FR.wav': {'start': 805.222, 'length': 2.153}, 'WAVFiles/ExperimentFiles/JR_S_RBook.wav': {'start': 807.875, 'length': 1.974}, 'WAVFiles/ExperimentFiles/CJ_P_PW.wav': {'start': 810.349, 'length': 2.231}, 'WAVFiles/ExperimentFiles/CJ_P_RH.wav': {'start': 813.08, 'length': 2.123}, 'WAVFiles/ExperimentFiles/CJ_P_HTB.wav': {'start': 815.703, 'length': 2.137}, 'WAVFiles/ExperimentFiles/JR_P_PWall.wav': {'start': 818.34, 'length': 2.028}, 'WAVFiles/ExperimentFiles/JR_P_FB.wav': {'start': 820.868, 'length': 1.979}, 'WAVFiles/ExperimentFiles/CM_P_CTree.wav': {'start': 823.347, 'length': 1.846}, 'WAVFiles/ExperimentFiles/JR_S_CT.wav': {'start': 825.693, 'length': 2.085}, 'WAVFiles/ExperimentFiles/J_S_SF.wav': {'start': 828.278, 'length': 2.049}, 'WAVFiles/ExperimentFiles/CJ_P_PA.wav': {'start': 830.827, 'length': 2.249}, 'WAVFiles/ExperimentFiles/JR_S_DMS.wav': {'start': 833.576, 'length': 2.252}, 'WAVFiles/ExperimentFiles/CJ_P_HC.wav': {'start': 836.328, 'length': 2.144}, 'WAVFiles/ExperimentFiles/CM_P_WD.wav': {'start': 838.972, 'length': 2.134}, 'WAVFiles/ExperimentFiles/JR_S_BC.wav': {'start': 841.606, 'length': 2.043}, 'WAVFiles/ExperimentFiles/JR_S_WC.wav': {'start': 844.149, 'length': 2.021}, 'WAVFiles/ExperimentFiles/JR_S_BB.wav': {'start': 846.67, 'length': 2.252}, 'WAVFiles/ExperimentFiles/JR_P_SF.wav': {'start': 849.422, 'length': 1.974}, 'WAVFiles/ExperimentFiles/CM_S_HTB.wav': {'start': 851.896, 'length': 2.136}, 'WAVFiles/ExperimentFiles/J_S_FB.wav': {'start': 854.532, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_HB.wav': {'start': 857.214, 'length': 2.142}, 'WAVFiles/ExperimentFiles/CJ_P_EP.wav': {'start': 859.856, 'length': 2.114}, 'WAVFiles/ExperimentFiles/JR_P_BSC.wav': {'start': 862.47, 'length': 2.432}, 'WAVFiles/ExperimentFiles/CJ_P_PF.wav': {'start': 865.402, 'length': 2.37}, 'WAVFiles/ExperimentFiles/J_S_BCat.wav': {'start': 868.272, 'length': 2.072}, 'WAVFiles/ExperimentFiles/JR_P_KB.wav': {'start': 870.844, 'length': 1.795}, 'WAVFiles/ExperimentFiles/JR_P_JF.wav': {'start': 873.139, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_FR.wav': {'start': 875.824, 'length': 1.934}, 'WAVFiles/ExperimentFiles/CM_P_CT.wav': {'start': 878.258, 'length': 2.023}, 'WAVFiles/ExperimentFiles/J_S_CTree.wav': {'start': 880.781, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_S_FB.wav': {'start': 883.286, 'length': 2.093}, 'WAVFiles/ExperimentFiles/CM_S_MB.wav': {'start': 885.879, 'length': 2.082}, 'WAVFiles/ExperimentFiles/CM_P_HC.wav': {'start': 888.461, 'length': 2.05}, 'WAVFiles/ExperimentFiles/CJ_P_WD.wav': {'start': 891.011, 'length': 2.229}, 'WAVFiles/ExperimentFiles/JR_P_TF.wav': {'start': 893.74, 'length': 2.038}, 'WAVFiles/ExperimentFiles/JR_S_PC.wav': {'start': 896.278, 'length': 2.06}, 'WAVFiles/ExperimentFiles/J_S_RBook.wav': {'start': 898.838, 'length': 2.015}, 'WAVFiles/ExperimentFiles/JR_P_DMS.wav': {'start': 901.353, 'length': 2.233}, 'WAVFiles/ExperimentFiles/J_S_TB.wav': {'start': 904.086, 'length': 2.411}, 'WAVFiles/ExperimentFiles/CM_S_WM.wav': {'start': 906.997, 'length': 2.08}, 'WAVFiles/ExperimentFiles/CM_P_HB.wav': {'start': 909.577, 'length': 2.047}, 'WAVFiles/ExperimentFiles/CM_P_PF.wav': {'start': 912.124, 'length': 2.276}, 'WAVFiles/ExperimentFiles/J_S_MB.wav': {'start': 914.9, 'length': 2.171}, 'WAVFiles/ExperimentFiles/CM_P_EP.wav': {'start': 917.571, 'length': 2.02}, 'WAVFiles/ExperimentFiles/JR_S_RH.wav': {'start': 920.091, 'length': 2.126}, 'WAVFiles/ExperimentFiles/JR_S_PW.wav': {'start': 922.717, 'length': 2.121}, 'WAVFiles/ExperimentFiles/JR_S_PA.wav': {'start': 925.338, 'length': 2.206}, 'WAVFiles/ExperimentFiles/CJ_P_PWall.wav': {'start': 928.044, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_WM.wav': {'start': 930.619, 'length': 2.168}, 'WAVFiles/ExperimentFiles/CM_S_TB.wav': {'start': 933.287, 'length': 2.323}, 'WAVFiles/ExperimentFiles/CJ_P_CT.wav': {'start': 936.11, 'length': 2.118}, 'WAVFiles/ExperimentFiles/JR_P_FBlanket.wav': {'start': 938.728, 'length': 1.958}, 'WAVFiles/ExperimentFiles/CM_S_FBlanket.wav': {'start': 941.186, 'length': 2.028}, 'WAVFiles/ExperimentFiles/CM_P_PC.wav': {'start': 943.714, 'length': 1.771}, 'WAVFiles/ExperimentFiles/CJ_P_BC.wav': {'start': 945.985, 'length': 2.034}, 'WAVFiles/ExperimentFiles/CM_P_RBook.wav': {'start': 948.519, 'length': 1.834}, 'WAVFiles/ExperimentFiles/CM_S_TF.wav': {'start': 950.853, 'length': 1.926}, 'WAVFiles/ExperimentFiles/JR_S_HC.wav': {'start': 953.279, 'length': 2.188}, 'WAVFiles/ExperimentFiles/JR_S_BSC.wav': {'start': 955.967, 'length': 2.459}, 'WAVFiles/ExperimentFiles/JR_P_MB.wav': {'start': 958.926, 'length': 2.166}, 'WAVFiles/ExperimentFiles/J_S_HTB.wav': {'start': 961.592, 'length': 2.224}, 'WAVFiles/ExperimentFiles/CM_S_PWall.wav': {'start': 964.316, 'length': 2.0}, 'WAVFiles/ExperimentFiles/JR_S_CTree.wav': {'start': 966.816, 'length': 1.965}, 'WAVFiles/ExperimentFiles/JR_S_HB.wav': {'start': 969.281, 'length': 2.102}, 'WAVFiles/ExperimentFiles/JR_P_WM.wav': {'start': 971.883, 'length': 2.048}, 'WAVFiles/ExperimentFiles/CJ_P_WC.wav': {'start': 974.431, 'length': 2.046}, 'WAVFiles/ExperimentFiles/CJ_P_BB.wav': {'start': 976.977, 'length': 2.28}, 'WAVFiles/ExperimentFiles/CM_P_PW.wav': {'start': 979.757, 'length': 2.137}, 'WAVFiles/ExperimentFiles/CM_P_RH.wav': {'start': 982.394, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_TF.wav': {'start': 984.923, 'length': 2.014}, 'WAVFiles/ExperimentFiles/JR_S_EP.wav': {'start': 987.437, 'length': 2.123}, 'WAVFiles/ExperimentFiles/JR_S_PF.wav': {'start': 990.06, 'length': 2.311}, 'WAVFiles/ExperimentFiles/JR_S_BCat.wav': {'start': 992.871, 'length': 2.029}, 'WAVFiles/ExperimentFiles/CM_P_HTB.wav': {'start': 995.4, 'length': 2.043}, 'WAVFiles/ExperimentFiles/JR_P_TB.wav': {'start': 997.943, 'length': 2.375}, 'WAVFiles/ExperimentFiles/CM_P_BCat.wav': {'start': 1000.818, 'length': 1.964}, 'WAVFiles/ExperimentFiles/CM_P_PA.wav': {'start': 1003.282, 'length': 2.154}}};
