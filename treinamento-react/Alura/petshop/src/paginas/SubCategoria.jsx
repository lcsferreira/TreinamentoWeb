import React from 'react'
import { useParams } from 'react-router';
import ListaPost from '../components/ListaPost';

export default function SubCategoria() {
  const { subcategoria } = useParams();
  return (
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}