
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const posts = [
  {
    id: 1,
    author: 'Nguyễn Văn A',
    content: 'Chia sẻ tài liệu ôn thi đại học môn Toán',
    likes: 15,
    comments: 5,
  },
  {
    id: 2,
    author: 'Trần Thị B',
    content: 'Cần tìm nhóm học IELTS online',
    likes: 10,
    comments: 8,
  },
];

export const CommunityFeed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => {
        const isLiked = likedPosts.includes(post.id);
        const initials = post.author
          .split(' ')
          .map(name => name[0])
          .join('');

        return (
          <Card key={post.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="font-semibold">{post.author}</div>
              </div>
              <p className="mb-6 text-gray-800">{post.content}</p>
              <div className="flex items-center gap-6 text-gray-600">
                <button 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  onClick={() => handleLike(post.id)}
                >
                  <Heart 
                    className={`w-5 h-5 ${isLiked ? 'fill-primary text-primary' : ''}`} 
                  />
                  <span>{isLiked ? post.likes + 1 : post.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Chia sẻ</span>
                </button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
