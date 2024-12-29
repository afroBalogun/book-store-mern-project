import React, { useEffect } from 'react'
import InputField from '../addBook/InputField'
import SelectField from '../addBook/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookMutation } from '../../../redux/features/books/booksAPI';

import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

export default function UpdateBook(){
    const { id } = useParams();
    const { data: bookData, isLoading, isError, refetch } = useFetchBookByIdQuery(id);
    // console.log(bookData)
    const [updateBook] = useUpdateBookMutation();
    const { register, handleSubmit, setValue, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    useEffect(() => {
      if (bookData) {
        setValue('title', bookData.title);
        setValue('description', bookData.description);
        setValue('category', bookData?.category);
        setValue('trending', bookData.trending);
        setValue('oldPrice', bookData.oldPrice);
        setValue('newPrice', bookData.newPrice);
        setValue('coverImage', bookData.coverImage)
      }
    }, [bookData, setValue])

    const onSubmit = async (data) => {
      const updateBookData = {
        title: data.title,
        description: data.description,
        category: data.category,
        trending: data.trending,
        oldPrice: Number(data.oldPrice),
        newPrice: Number(data.newPrice),
        coverImage: data.coverImage || bookData.coverImage,
      };
      setIsSubmitting(true);
    try {
        await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updateBookData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        Swal.fire({ title: "Book Updated", icon: "success" });
        navigate('/dashboard/books');
    } catch (error) {
        alert("Failed to update book.");
    } finally {
        setIsSubmitting(false);
    }
    }
    if (isLoading) return <Loading />
    if (isError) return <div>Error fetching book data</div>
    return (
      <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Title"
            name="title"
            placeholder="Enter book title"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            placeholder="Enter book description"
            type="textarea"
            register={register}
          />

          <SelectField
            label="Category"
            name="category"
            options={[
              { value: '', label: 'Choose A Category' },
              { value: 'business', label: 'Business' },
              { value: 'technology', label: 'Technology' },
              { value: 'fiction', label: 'Fiction' },
              { value: 'horror', label: 'Horror' },
              { value: 'adventure', label: 'Adventure' },
            ]}
            register={register}
          />
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register('trending')}
                className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
            </label>
          </div>

          <InputField
            label="Old Price"
            name="oldPrice"
            type="float"
            placeholder="Old Price"
            register={register}
          />

          <InputField
            label="New Price"
            name="newPrice"
            type="float"
            placeholder="New Price"
            register={register}
          />

          <InputField
            label="Cover Image URL"
            name="coverImage"
            type="text"
            placeholder="Cover Image URL"
            register={register}
          />

          <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
              {isSubmitting ? "Updating..." : "Update Book"}
          </button>
        </form>
      </div>
    )
}