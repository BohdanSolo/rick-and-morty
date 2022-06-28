import React from "react";
import {Pagination, PaginationItem, Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";

interface AppPaginationProps {
    pageNumber: number,
    setPageNumber: (pageNumber: number) => void
    setSearchInputValue: (searchQuery: string) => void
    pagesCount: number;
}

const AppPagination = ({pageNumber, setPageNumber, pagesCount, }: AppPaginationProps): JSX.Element => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPageNumber(value);
    };


    return (
        <Grid
            sx={{display: "flex", justifyContent: "center", marginBottom: "20px"}}
        >
            <Stack spacing={2}>
                <Pagination
                    color="primary"
                    count={pagesCount}
                    size="large"
                    showFirstButton
                    showLastButton
                    onChange={handleChange}
                    page={pageNumber}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            sx={{padding: "0 20px"}}
                            to={`/characters/?page=${item.page}`}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </Grid>
    );
};

export default React.memo(AppPagination);
