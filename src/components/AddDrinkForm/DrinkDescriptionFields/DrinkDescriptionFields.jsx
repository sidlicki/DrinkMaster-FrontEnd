import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import Select from 'react-select';

import {
  AddImageField,
  Wrapper,
  InputsDescrField,
  DescrField,
  DivAlcoholic,
  WrapperAddDiv,
  LabelAdd,
  LabelAlcoholic,
  LabelNonAlcoholic,
  RadioInput,
  customStylesSelect,
} from './DrinkDescriptionFields.styled';

export const DrinkDescriptionFields = ({ categories, servings }) => {
  return (
    <Wrapper>
      <AddImageField>
        <WrapperAddDiv>
          <LabelAdd>
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 5.8335V22.1668"
                // stroke="#161F37"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.33203 14H22.6654"
                // stroke="#161F37"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Field
              style={{ display: 'none' }}
              type="file"
              name="drinkThumb"
              accept="image/*"
            />
          </LabelAdd>
          <p>Add Image</p>
        </WrapperAddDiv>
      </AddImageField>
      <DescrField>
        <InputsDescrField>
          <div className="styledDivInput">
            <Field
              className="styledInputText"
              placeholder="Enter item title"
              name="name"
            />
          </div>
          <div className="styledDivInput">
            <Field
              className="styledInputText"
              placeholder="Enter item title"
              name="description"
            />
          </div>
          <div className="styledDivInput">
            <label className="labelSelect">
              <p className="labelTitle">Category</p>
              <Select
                className="selectStyled"
                name="category"
                options={categories}
                styles={customStylesSelect}
              />
            </label>
          </div>
          <div className="styledDivInput">
            <label className="labelSelect">
              <p className="labelTitle">Glass</p>
              <Select
                className="selectStyled"
                name="serving"
                options={servings}
                styles={customStylesSelect}
              />
            </label>
          </div>
        </InputsDescrField>
        <DivAlcoholic>
          <div>
            <LabelAlcoholic>
              <RadioInput type="radio" value="Alcoholic" name="alcoholic" />
              Alcoholic
            </LabelAlcoholic>
          </div>
          <div>
            <LabelNonAlcoholic>
              <RadioInput type="radio" value="Non alcoholic" name="alcoholic" />
              Non-alcoholic
            </LabelNonAlcoholic>
          </div>
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
