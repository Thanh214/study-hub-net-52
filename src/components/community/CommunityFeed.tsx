
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

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
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-6">
            <div className="font-semibold mb-2">{post.author}</div>
            <p className="mb-4">{post.content}</p>
            <div className="flex gap-4 text-gray-600">
              <button className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {post.likes}
              </button>
              <button className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {post.comments}
              </button>
              <button className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                Chia sẻ
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
