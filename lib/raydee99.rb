# raydee99.rb

# Namespace for Application code
module Raydee99
  # All methods defined here will be available in config
  module Util
    # @return [String] calder version number
    def version()
      Time.now.strftime("%Y.%m.%d") + '-' + `git log --format="%H" -n 1`[0...3]
    rescue
      Time.now.strftime("%Y.%m.%d")
    end
  end

  # All methods defined here will be available in ERB templates
  module Helpers
    # @param games [Array<EnhancedHash>]
    # @param type [#to_s] ttrpg | video_game | other
    def select_games(games, type)
      case type.to_s
      when 'ttrpg'
        games.select { |g| g['type']&.casecmp? 'ttrpg' }
      when 'video_game'
        games.select { |g| g['type']&.casecmp? 'video_game' }
      when 'other'
        games.reject { |g| %w[ttrpg video_game].include? g['type']&.downcase }
      else
        raise StandardError, "Invalid type #{type} param when calling select_games helper"
      end
    end

    # @param font_file [String]
    def font_path(font_file)
      asset_path('fonts', font_file).delete_suffix('.fonts')
    end
  end
end

