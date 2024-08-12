import { useMutation, useQuery } from '@tanstack/react-query';
import { getComments, postComment } from './api';

export const useQueryGetComments = (cursor?: number) => {
  const { isLoading, data } = useQuery({
    queryKey: ['getComments', cursor],
    queryFn: () => getComments(cursor),
  });
  return { isLoading, data };
};

export const useMutationPostComment = (type: number) => {
  const mutation = useMutation({
    mutationKey: ['postComment', type],
    mutationFn: () => postComment(type),
  });
  return mutation;
};
