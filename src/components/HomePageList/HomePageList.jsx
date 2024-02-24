
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectMainPageDrinks } from '../../redux/drinks/drinks.selectors';
import { Category, CategoryContainer,CategoryCardList, CardsWrapper } from './HomePageList.styled';
import DrinksItem from '../Drinks/DrinksItem';

const HomePageList = () => {
  const drinksData = useSelector(selectMainPageDrinks);
  return (
    <CategoryContainer>
      <CategoryCardList>
        {drinksData.map(({ category, drinks }) => {
          return (
          <ul key={nanoid()}>
              <Category key={nanoid()}>{category}</Category>
              <CardsWrapper key={nanoid()}>
                {drinks.map(({ drink, drinkThumb, _id }) => {
                  return (
                    <DrinksItem
                      key={_id}
                      id={_id}
                      drinkTitle={drink}
                      drinkThumb={drinkThumb}
                    />
                  );
                })}
              </CardsWrapper>
            </ul>
          );
        })}
      </CategoryCardList>
    </CategoryContainer>
  );
};

export default HomePageList;
