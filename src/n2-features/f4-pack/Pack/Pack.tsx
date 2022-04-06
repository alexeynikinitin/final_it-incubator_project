import React from 'react';
import s from "./Pack.module.css"
import {CardsTable} from "./CardsTable/CardsTable";
import {SearchInput} from "./SearchInput/SearchInput";
import {PaginationBlock} from "./PaginationBlock/PaginationBlock";
import {GoBack} from "../../../n1-main/m1-ui/common/goBack/GoBack";
import {CardType} from "../../../n1-main/m2-bll/a2-reducers/cards-reducer";
import {CardsAreMissing} from "./CardsTable/CardsAreMissing/CardsAreMissing";
import {string} from "yup";

export const Pack: React.FC<PackType> = (props) => {
    const {cards, sort, setSearchCardQuestionCallback, setSortCardColumnCallBack, ...paginationProps} = props;

    return (
        <div className={s.pack}>
            <GoBack/>
            <>
                {cards.length === 0 && <CardsAreMissing/>}
                {/*{ cards.length !== 0 && ''}*/}
                <SearchInput className={s.searchInput}
                             onChangeText={setSearchCardQuestionCallback}
                             placeholder={"Search in question..."}/>
                <CardsTable cards={cards}
                            sort={sort}
                            setSortCardColumnCallBack={setSortCardColumnCallBack}/>
                <PaginationBlock {...paginationProps}/>
            </>

        </div>
    );
};

type PackType = {
    pageSize: number;
    cards: CardType[];
    totalCount: number;
    currentPage: number;
    setCurrentPageCallback: (currentPage: number) => void;
    setCountItemsOnPageCallback: (countItemsOnPage: number) => void;
    setSearchCardQuestionCallback: (cardQuestion: string) => void
    setSortCardColumnCallBack: (sort: string) => void
    sort: string
};
