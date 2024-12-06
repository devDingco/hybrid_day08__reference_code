"use client";

import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { FETCH_SOLPLACE_LOG } from "../apis/graphql/queries/fetch-solplace-log.query";

export const useBoardDetail = () => {
  const params = useParams();
  const id = params.solplaceLogId.toString();

  const { data } = useQuery(FETCH_SOLPLACE_LOG, {
    variables: { id },
  });

  return {
    data,
  };
};
