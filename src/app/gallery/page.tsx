
'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { fetchGalleryImages } from "@/lib/data";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, ServerCrash } from 'lucide-react';
import type { GalleryImage } from '@/lib/types';

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchGalleryImages()
            .then(data => {
                setImages(data);
            })
            .catch(err => {
                console.error("Failed to fetch gallery images:", err);
                setError("Could not load the gallery. Please try again later.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">LMC Gallery</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    A glimpse into our team and work culture at LMC Motors.
                </p>
            </div>
            <div className="mt-12">
                {isLoading ? (
                     <div className="flex h-64 items-center justify-center">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    </div>
                ) : error ? (
                    <div className="flex justify-center">
                        <Alert variant="destructive" className="max-w-md text-center">
                             <ServerCrash className="h-4 w-4" />
                            <AlertTitle>Failed to Load Gallery</AlertTitle>
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {images.map((image) => (
                            <Card key={image.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video">
                                        <Image 
                                            src={image.imageUrl} 
                                            alt={image.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
