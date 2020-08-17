module AllTagsFilter
    include Liquid::StandardFilters
  
    def all_tags(posts)
      counts = {}
  
      posts.each do |post|
        post['tags'].each do |tag|
          if counts[tag]
            counts[tag] += 1
          else
            counts[tag] = 1
          end
        end
      end
  
      tags = counts.keys
      tags.reject { |t| t.empty? }
        .map { |tag| { 'name' => tag, 'count' => counts[tag] } }
        .sort { |tag1, tag2| tag2['count'] <=> tag1['count'] }
    end
  end
  
  Liquid::Template.register_filter(AllTagsFilter)