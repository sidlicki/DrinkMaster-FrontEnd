import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/drinks/drinks.selectors';

import { useDrink } from '../../hooks/useDrink';
import { getFavoriteAll } from '../../redux/drinks/drinks.operations';
import { Container } from '../../components/Layout/Container/Container';
import { FavoriteDrinksWrapper } from './FavoriteDrinksPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import NotFoundDrinks from '../../components/NotFoundDrinks/NotFoundDrinks';
import { Paginator } from '../../components/Paginator/Paginator';

export default function FavoriteDrinksPage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { total, favoriteDrinks } = useDrink();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasDrinks, setHasDrinks] = useState(false);
  const page = useSelector(selectPage);
  console.log(page);

  // const drinksPerPage = 6;

  const onPageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // const totalPages = Math.ceil(total / drinksPerPage);

  useEffect(() => {
    if (favoriteDrinks?.length === 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    }

    setHasDrinks(favoriteDrinks?.length > 0);
  }, [currentPage, favoriteDrinks]);

  // useEffect(() => {
  //   navigate(`?page=${currentPage}`);
  // }, [currentPage, navigate]);

  // useEffect(() => {
  //   dispatch(getFavoriteAll({ page: currentPage, limit: drinksPerPage }))
  //     .unwrap()
  //     .catch((error) => console.log(error));
  // }, [dispatch, currentPage, total, drinksPerPage]);

  useEffect(() => {
    // dispatch(getFavoriteAll({ page: page }))
    dispatch(getFavoriteAll({ page: page }))
      .unwrap()
      .catch((error) => console.log(error));
  }, [dispatch, page, total]);

  return (
    <Container>
      <FavoriteDrinksWrapper>
        <PageTitle title="Favorites" />
        {hasDrinks > 0 ? (
          <DrinksList
            favorite={true}
            drinksData={favoriteDrinks}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        ) : (
          <NotFoundDrinks text="You haven't added any favorite cocktails yet" />
        )}
        <Paginator />
      </FavoriteDrinksWrapper>
    </Container>
  );
}
