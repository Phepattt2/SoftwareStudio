
import './style/MainStyle.css'
import Counter from './component/counter';
import Card from './component/card'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div class="TextContainer">
          <h1 class="HeaderText">โหวตอาหาร</h1>
        </div>

        <div class="MainCardContainer">
          <div class="ContentContainer">
            <Card FoodType="อาหารหวาน" FoodName="Egg Pudding" FoodInfo="Mix rock sugar and water in a saucepan. Boil on low heat, stirring occasionally. ...
Beat the eggs gently with a whisk or fork before adding to the mixture. Stir well. ...
Once the egg mixture is ready, gently pour it into the moulds or bowls. ...
Place the bowls into the steamer and steam for 12 minutes." ImageUrl="https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00-1024x576.jpg"/>
          </div>

          <div class="ContentContainer">
            <Card FoodType="อาหารคาว" FoodName="japanese rolled egg omelet" FoodInfo="In a small bowl, combine eggs, mirin, soy sauce, dashi (if using) and sugar. ...
Heat 1 teaspoon oil in a tamagoyaki pan or a nonstick 8-inch skillet over medium. ...
Pour about 3 tablespoons of the egg mixture into the pan and quickly tilt the pan, swirling the egg mixture around to create an even layer." ImageUrl="https://drivemehungry.com/wp-content/uploads/2022/05/tamagoyaki-japanese-rolled-omelet-14.jpg"/>
          </div>

          <div class="ContentContainer">
            <Card FoodType="เครื่องดื่ม" FoodName="Dirty Coffee" FoodInfo="Put the cold milk and coffee cup into the freezer for 15 mintues.
Pull a double shot espresso with your espresso machine. With 18 grams of finely ground coffee, you pull 30 grams of espresso.
Pour the espresso over the milk in the cold cup.
Enjoy your dirty coffee!" ImageUrl="https://www.ryoiireview.com/upload/article/202103/1615552513_69a445c5eb1d166996b24871a12546de.jpg"/>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
