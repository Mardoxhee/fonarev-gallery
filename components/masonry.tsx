"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"; // Assure-toi d'importer useRouter

const MasonryComponent = () => {
    const [loadedImages, setLoadedImages] = useState<number[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // État pour la modale
    const [blogImages, setBlogImages] = useState<{ id: number; src: string; alt: string }[]>([]); // État pour les images
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id')
    console.log("id", id)
    useEffect(() => {
        if (id) {
            const fetchImages = async () => {
                try {
                    const res = await fetch(`https://api-gallery.fona-vps.cloud/wp-json/wp/v2/events/${id}?acf_format=standard&_fields=id,title,acf,excerpt,featured_media`);
                    const data = await res.json();

                    // Supposons que les images soient dans data.acf.photos, adapte cela selon la structure de ta réponse
                    const images = data.acf.photos.map((photo: { id: number; url: string; alt: string }) => ({
                        id: photo.id,
                        src: photo.url,
                        alt: photo.alt,
                    }));
                    setBlogImages(images);
                } catch (error) {
                    console.error("Erreur lors du fetch des images :", error);
                }
            };

            fetchImages();
        }
    }, [id]); // Rappel de l'effet si l'ID change

    const handleImageLoad = (id: number) => {
        setLoadedImages((prev) => [...prev, id]);
    };

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc); // Afficher la modale avec l'image sélectionnée
    };

    const closeModal = () => {
        setSelectedImage(null); // Fermer la modale
    };

    return (
        <div>
            <div className="masonry-grid">
                {blogImages.map((image) => (
                    <div
                        key={image.id}
                        className="masonry-item"
                        onClick={() => openModal(image.src)} // Ouvrir la modale sur clic
                    >
                        <div className="relative overflow-hidden rounded-lg cursor-pointer">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className={`w-full h-auto transition duration-500 ease-in-out transform ${loadedImages.includes(image.id)
                                    ? "scale-100 blur-0"
                                    : "scale-105 blur-md"
                                    }`}
                                onLoad={() => handleImageLoad(image.id)}
                                loading="lazy"
                                placeholder="blur"
                                   blurDataURL="/images/abstract.jpg"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modale */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full">
                        <Image
                            src={selectedImage}
                            alt="Selected image"
                            width={1000}
                            height={600}
                            className="w-full h-auto"
                        />
                        {/* Bouton de fermeture */}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasonryComponent;
