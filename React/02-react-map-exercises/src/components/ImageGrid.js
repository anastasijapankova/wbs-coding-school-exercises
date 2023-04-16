import './ImageGrid.css';

export function ImageGrid() {
    const images = [
        'https://images.unsplash.com/photo-1568568544477-ee88c0c1333e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1568568544477-ee88c0c1333e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1568568544477-ee88c0c1333e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1568568544477-ee88c0c1333e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    ];

    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <img key={index} src={image} alt={"j"} />
            ))}
        </div>
    );
};

