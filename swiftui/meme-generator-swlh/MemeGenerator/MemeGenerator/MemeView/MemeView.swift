//
//  MemeView.swift
//  MemeGenerator
//
//  Created by Fatah on 30/10/20.
//

import SwiftUI

struct MemeView: View {
    
    // the individual meme info
    let meme: Meme.Info
    
    var body: some View {
        
        // an image loaded from url
        AsyncImage(url: URL(string: meme.url ?? "https://i.imgflip.com/1bij.jpg")!) {
            RoundedRectangle(cornerRadius: 0)
        }
        .aspectRatio(contentMode: .fill) // fill the available space
        .frame(width: UIScreen.main.bounds.width - 32, // width of screen
               height: 350)
        .overlay(
            // overlay to add text at the bottom of the image, with gradient background to make it readable
            Text(meme.name ?? "")
                .bold()
                .font(.system(size: 27,
                              weight: .bold,
                              design: .rounded))
                .foregroundColor(.white)
                .lineLimit(3)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.leading, 10)
                .padding(.bottom, 10)
                .background(
                    LinearGradient(gradient: Gradient(colors: [Color.black.opacity(0.75), .clear]),
                                   startPoint: .bottom,
                                   endPoint: .top)
                ), alignment: .bottom
        )
        .cornerRadius(20)
        .padding(.vertical)
    }
}

struct MemeView_Previews: PreviewProvider {
    static var previews: some View {
        MemeView(meme: .fakeMeme)
    }
}
